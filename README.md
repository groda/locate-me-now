# Where am I

Show my current location on a map.

## Run on Glitch
<h2>
  <a href="https://locate-me-now.glitch.me/">https://locate-me-now.glitch.me/</a>
</h2>

## Run on your local machine

This is an example for Mac OS

1. Download Node.js® from https://nodejs.org/en/download/package-manager
   (for Mac I chose v20.17.0 (LTS) / macOS / nvm)
   
   ```
   # installs nvm (Node Version Manager)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

   # download and install Node.js (you may need to restart the terminal)
   nvm install 20

   # verifies the right Node.js version is in the environment
   node -v # should print `v20.17.0`

   # verifies the right npm version is in the environment
   npm -v # should print `10.8.2`
   ```
2. Not sure if this is necessary:
   ```
   nvm use 20.17.0
   ```
3. Install express
   ```
   npm install express
   ```
4. Clone the repo with
   ```
   git clone https://github.com/groda/locate-me-now.git
   ```
5. Change directory
   ```
   cd locate-me-now
   ```
6. Start the app
   ```
   node server.js
   ```
7. You should get a message like: `Your app is listening on port 59257` (port number may vary). Open http://127.0.0.1:59257 in a browser to run the app.
   
   

