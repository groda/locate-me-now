$(document).ready(function () {
        const center = [46, 7];
        // Create the map
        var map = L.map("map").setView(center, 2);

        // marker
        const markerIcon = L.icon({
          iconSize: [80, 80],
          iconAnchor: [32, 80],
          popupAnchor: [2, -40],
          // specify the path here
          iconUrl:
            "https://cdn.glitch.global/6c31fb7f-564c-4070-b8a2-6a84d079e5cd/koala-4373467_640.png?v=1727655948257",
        });
        var marker = L.marker(
          center,
          {
            draggable: true, // Make the icon draggable
            title: "I am here", // Add a title
            opacity: 0.99,
            icon: markerIcon, // here assign the markerIcon var
          } // Adjust the opacity
        );

        // Set up the OSM layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        let locationBox = L.Control.extend({
          onAdd: function () {
            var box = L.DomUtil.create("div");
            box.id = "my-location";
            box.innerHTML =
              "<button id='find-me'>Show my location</button><br/>" +
              "<p id='status'> ---</p>";
            return box;
          },
        });

        let bbox = L.Control.extend({
          options: {
            position: "bottomleft",
            buttonText: "Show my location",
          },
          setButtonText(text) {
            this.options.buttonText = text;
          },
          onAdd: function (map) {
            let boxContainer = L.DomUtil.create("div", "box-container");
            let boxButton = L.DomUtil.create(
              "button",
              "box-button",
              boxContainer
            );
            let boxText = L.DomUtil.create("div", "box-text", boxContainer);
            boxButton.innerText = this.options.buttonText;
            boxButton.addEventListener("click", geoFindMe);
            boxText.id = "my-location";
            boxText.textContent = "";
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
          const myLocation = document.querySelector("#my-location");
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
            marker.addTo(map);
            map.on("zoomend", function () {
              circle.setRadius(accuracy);
              circle.setLatLng([latitude, longitude]);
              circle.addTo(map);
              myLocation.textContent = `Lat: ${latitude.toFixed(2)}
                                        Lon: ${longitude.toFixed(2)}
                                        (±${Math.round(accuracy)} meters)`;
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

  