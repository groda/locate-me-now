# Privacy Notice: Geolocation in This App

> [!IMPORTANT]  
> This app uses your device's precise location. Modern browser geolocation can be **creepily accurate** — read on to understand when and how your data is shared.

This small app demonstrates how to display your current location on a map using the browser's **Geolocation API** (via `navigator.geolocation.getCurrentPosition()`) and **Leaflet** for mapping, combined with **Nominatim** (OpenStreetMap's free geocoding service) for reverse geocoding to show your address.

While this is a useful feature, it involves sharing **highly sensitive location data**. We want to highlight the privacy implications so users (and developers) are aware of what happens when you grant permission.

## How It Works

1. **Browser Geolocation API**  
   When you click **"Show my location"**, the browser requests permission to access your device's location.  
   If approved, it returns your latitude, longitude, and an **accuracy** value (in meters, typically 95% confidence).  
   - On mobile devices with GPS enabled: **Very precise** (often within 5–20 meters).  
   - On desktops or devices without GPS: Relies on Wi-Fi networks, cell towers, or IP address → **less accurate** (could be hundreds of meters or even city-level).  
   This precision can reveal your exact home, office, or current position.  
   **At this stage, your coordinates stay entirely in your browser—no data is sent anywhere.**

2. **Reverse Geocoding with Nominatim**  
   > [!WARNING]  
   > Only after your location is shown and you explicitly click the **"More"** button does the app send your coordinates to Nominatim (hosted by OpenStreetMap) to convert them into a human-readable address.  
   > This step is surprisingly accurate, often pinpointing your street or building.  
   > Nominatim is a public service, so your coordinates are sent to their servers **only when you click "More"**.

## Privacy Risks

> [!CAUTION]  
> Sharing your precise location can reveal sensitive information about your home, workplace, routines, or visits to places like medical facilities.

- **Exact Location Exposure**  
  Your coordinates can reveal precise details about your whereabouts. In some cases, this could expose your home address, daily routines, or sensitive locations (e.g., medical facilities).

- **No Built-in Anonymization**  
  The Geolocation API sends raw coordinates. There is no automatic blurring or approximation unless the app implements it.

- **Server-Side Logging**  
  When you click "More" and use Nominatim's public instance, your requests may be logged or analyzed by OpenStreetMap for service improvement (see their [privacy policy](https://osmfoundation.org/wiki/Privacy_Policy)).  
  The app itself doesn't store your location, but the third-party service receives it only at that moment.

- **Browser Permission**  
  Browsers prompt you each time (or remember your choice), but once granted, the app can access your location until you revoke it in browser settings.

## Recommendations for Users

> [!TIP]  
> - Use **"Show my location"** freely — no data leaves your device.  
> - Think twice before clicking **"More"** — that's when your precise coordinates are sent to an external service.

- **Be Cautious with Permissions** → Only grant location access if you trust the app and understand why it needs your exact position.  
- **Revoke Access Anytime** → In Chrome/Firefox: Settings → Privacy → Site permissions → Location.  
- **Test in Incognito** → To avoid stored permissions.

## Recommendations for Developers

If building similar apps:
- Request location only when necessary.
- Use `enableHighAccuracy: false` if precision isn't critical.
- Consider blurring coordinates for privacy (e.g., round to fewer decimals).
- Cache results to avoid repeated requests.
- Use self-hosted Nominatim for full control.
- Clearly document data handling in your README/privacy policy.

## Attribution & Sources

- Map data: © OpenStreetMap contributors
- Geocoding: Nominatim (OpenStreetMap)
- Library: Leaflet.js

> [!NOTE]  
> **Key takeaway**: Modern browser geolocation can be **creepily accurate**. The basic marker keeps everything private—only clicking "More" shares your coordinates with a third-party service. Always think twice before sharing your location online!