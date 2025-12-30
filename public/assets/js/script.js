document.addEventListener('DOMContentLoaded', function() {
    const center = [46, 7];
    // Create the map
    var map = L.map("map").setView(center, 2);

    // marker
    const markerIcon = L.icon({
      iconUrl: "assets/images/koala-4373467_640.png",
      iconSize: [80, 80],
      iconAnchor: [32, 80],
      popupAnchor: [2, -40],
    });
        
    var marker = L.marker(
      center,
      {
        draggable: true, // Make the icon draggable
        title: "I am here", // Add a title
        opacity: 0.99, // Adjust the opacity
        icon: markerIcon, // here assign the markerIcon var
      } 
    );

    // Set up the OSM layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);



    let bbox = L.Control.extend({
      options: { position: "bottomleft" },
      onAdd: function (map) {
        let boxContainer = L.DomUtil.create("div", "box-container");

        // Main button
        let findButton = L.DomUtil.create("button", "box-button", boxContainer);
        findButton.innerText = "Show my location";
        findButton.addEventListener("click", geoFindMe);

        // More button (hidden at start)
        let moreButton = L.DomUtil.create("button", "box-button", boxContainer);
        moreButton.innerText = "More";
        moreButton.style.display = "none";
        moreButton.style.marginLeft = "8px";

        // Main text area (this will hold everything)
        let boxText = L.DomUtil.create("div", "box-text", boxContainer);
        boxText.id = "my-location-latlon";  // keep your ID
        boxText.innerHTML = "---";          // initial text

        // We'll write all content (basic + more) into this single boxText

        // Click handler for More button: toggle between basic and full view
        moreButton.addEventListener("click", function () {
          if (moreButton.innerText === "More") {
            // Expand: show full details + move lat/lon to bottom
            boxText.innerHTML = boxText.dataset.fullContent || "<i>No details available</i>";
            moreButton.innerText = "Less";
          } else {
            // Collapse: show only basic lat/lon
            const latLonLine = boxText.dataset.latLonLine || "---";
            boxText.innerHTML = latLonLine;
            moreButton.innerText = "More";
          }
        });

        return boxContainer;
      },
    });



    new bbox({ position: "bottomleft" }).addTo(map);
    let circle = L.circle([0, 0], {
      radius: 0,
      fillColor: "#FC4503",
      stroke: false,
      fillOpacity: 0.2,
    });


    /* thanks to https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples */
    function geoFindMe() {
      const myLocation = document.querySelector("#my-location-latlon");
      myLocation.style.visibility = "visible";
      const duration = 0;
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        var myLatLng = new L.LatLng(latitude, longitude);
        map.on("zoomstart", function () {
          myLocation.textContent = "Locating…";
        });
        map.flyTo(myLatLng, 16, {
          animate: true,
          duration: duration, // in seconds
        });
        if (!marker) {
          marker = L.marker(myLatLng);
        } else {
          marker.setLatLng(myLatLng);
        }
        marker.addTo(map).bindPopup("I'm a friendly koala! 🐨");
        map.on("zoomend", function () {
          circle.setRadius(accuracy);
          circle.setLatLng([latitude, longitude]);
          circle.addTo(map);
          const boxText = document.querySelector("#my-location-latlon");
          const moreButton = document.querySelector(".box-container button:nth-child(2)");

          // Basic lat/lon line (this will always be shown at the bottom when expanded)
          const latLonLine = `Lat: ${latitude.toFixed(2)} Lon: ${longitude.toFixed(2)} (±${Math.round(accuracy)} meters)`;

          // Store it for later use when toggling
          boxText.dataset.latLonLine = latLonLine;

          // Show basic info initially
          myLocation.innerHTML = latLonLine;
 
          // Show the More button
          moreButton.style.display = "inline-block";

         // Ask Nominatim for the address
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
            .then(response => {
              if (!response.ok) throw new Error("Network error");
              return response.json();
            })
            .then(data => {
              const display_name = data.display_name || "Address not found";
              const osm_id = data.osm_id || "N/A";
              const osm_type = data.osm_type 
                ? data.osm_type.charAt(0).toUpperCase() + data.osm_type.slice(1) 
                : "";

              // Save the full detailed text into the "backpack"
              const fullContent = `
                <b>Click location</b><br>
                Latitude: ${latitude.toFixed(6)}<br>
                Longitude: ${longitude.toFixed(6)}<br><br>
                <b>Location address</b><br>
                ${display_name}<br><br>
                <b>OSM ID</b><br>
                ${osm_type} ${osm_id}
              `;

              boxText.dataset.fullContent = fullContent;  // ← This fills the backpack!
            })
            .catch(err => {
              console.error("Nominatim error:", err);
              boxText.dataset.fullContent = "<i>Could not load address details.</i>";
            }); 

        });

        return latitude, longitude;
      }
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        myLocation.textContent = `Unable to retrieve your location: ${err.message}`;
      }
      if (!navigator.geolocation) {
        myLocation.textContent =
          "Geolocation is not supported by your browser";
      } else {
        myLocation.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error, {
          timeout: 5000,
        });
      }
    }
});
