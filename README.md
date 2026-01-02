![locate-me-now](https://socialify.git.ci/groda/locate-me-now/image?font=Rokkitt&language=1&logo=https%3A%2F%2Fgithub.com%2Fgroda%2Flocate-me-now%2Fblob%2Fmain%2Fpublic%2Fassets%2Fimages%2Fkoala-4373467_640.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Solid&theme=Light)

[![Privacy Notice](https://img.shields.io/badge/Privacy-Notice-important?style=for-the-badge&logo=shield)](PRIVACY-GEOLOCATION.md)

# 🚀 Where Am I?

Show your current location on a map 🌍.

Featuring a very serious koala marker 🐨.

👉 [Try it live](https://groda.github.io/locate-me-now/)

## 🛰️ How It Works

The app uses the **Geolocation API** provided by modern browsers to determine your current location. It leverages the `getCurrentPosition()` function, which you can learn more about in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition). This function retrieves the geographic location of your device, allowing the app to display your position on a map! 🌍📍


## 🚀 Deployment Options

### 🌍 Live Demo (Static)

👉 [Try it here](https://groda.github.io/locate-me-now/)

*(Fast, client-side only — works directly in your browser, no server needed!)*

### 🌐 Deploy to Render (full Node.js version)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/groda/locate-me-now)

### 🌐 Open in CodeSandbox

[![Edit my-codesandbox-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/groda/locate-me-now?embed=1)

### 🐳 Run with Docker

To run the app in a Docker container on your machine:

1. **Install Docker**

   [https://docs.docker.com/desktop/] runs on Linux, Mac, and Windows.

2. **Clone the Repository**

   Clone the repo to your local machine:

   ```bash
   git clone https://github.com/groda/locate-me-now.git
   ```

3. **Change Directory**

   Navigate into the project directory:

   ```bash
   cd locate-me-now
   ```

4. **Build the image and launch the container**

   - For development only:
  
      ```
      docker compose up --build
      ```

   - In production:
  
      ```
      docker compose -f compose.prod.yaml up --build -d
      ```

5. **Open [http://localhost:3000/](http://localhost:3000/) in your browser

   The port $3000$ is hard-coded in `Dockerfile`, `compose.yml`, `compose.prod.yml`, and in `server.js`.

6. **Stop/restart**

   Stop the container with:
   ```
   docker compose down
   ```

   Start (without re-building image):

   ```
   docker compose up -d
   ```

### 💻 Run on Your Local Machine

This guide is for **Mac OS**. Follow these steps to run the app locally on your machine:

1. **Download Node.js®**

   Get Node.js from [here](https://nodejs.org/en/download/package-manager).
   (For Mac, I recommend **v20.17.0 (LTS)** / macOS / using **nvm** for version management.)

   Open your terminal and run the following commands:

   ```bash
   # Install nvm (Node Version Manager)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

   # Download and install Node.js (may require restarting the terminal)
   nvm install 20

   # Verify the correct version of Node.js
   node -v # should output `v20.17.0`

   # Verify the correct version of npm
   npm -v # should output `10.8.2`
   ```

2. **(Optional) Use Specific Node Version**

   Not sure if this is required, but if needed:

   ```bash
   nvm use 20.17.0
   ```

3. **Install Express**

   To install the required dependencies:

   ```bash
   npm install express
   ```

4. **Clone the Repository**

   Clone the repo to your local machine:

   ```bash
   git clone https://github.com/groda/locate-me-now.git
   ```

5. **Change Directory**

   Navigate into the project directory:

   ```bash
   cd locate-me-now
   ```

6. **Start the App**

   Run the app with the following command:

   ```bash
   node server.js
   ```

7. **Access the App**

   Once the app starts, you should see a message like:
   `Your app is listening on port 3000`.
   Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser to view the app in action! 🌐


> **Why keep the Node.js server?**  
> The app currently runs fully in the browser (no backend needed), but the Express server, Docker setup, and Render deployment are included as a foundation for future features (e.g., saving locations, user accounts, real-time updates, or API integrations). This way, the project is ready to grow without major refactoring later.

## 📜 Historical Hosting (Archived)

### ~~🌐 Former Glitch Demo~~
The app was previously hosted on Glitch:  
[**Locate Me Now on Glitch**](https://locate-me-now.glitch.me/) (no longer active)

> **Note:** Glitch shut down its free app hosting in 2025. This link is kept for historical reference.

## 💭 A Bit of jQuery Nostalgia

Feeling nostalgic about the old web days?  
Check out [`NOSTALGIA.md`](NOSTALGIA.md) for a short reflection on why removing jQuery felt a little bittersweet.

## Badges 

### ✅ CI & Quality Badges 
![JS/CSS Lint and HTML validate](https://github.com/groda/locate-me-now/actions/workflows/code-quality.yml/badge.svg)
![Link Check](https://github.com/groda/locate-me-now/actions/workflows/link-check.yml/badge.svg)
![Lighthouse CI](https://github.com/groda/locate-me-now/actions/workflows/lighthouse.yml/badge.svg)
![Gitleaks Secret Scan](https://github.com/groda/locate-me-now/actions/workflows/gitleaks.yml/badge.svg)

### 📦 Repo Info
[![License](https://img.shields.io/github/license/groda/locate-me-now)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/groda/locate-me-now)](https://github.com/groda/locate-me-now/commits/main)
[![Top Language](https://img.shields.io/github/languages/top/groda/locate-me-now)](https://github.com/groda/locate-me-now)
[![Contributors](https://img.shields.io/github/contributors/groda/locate-me-now)](https://github.com/groda/locate-me-now/graphs/contributors)
![Deploy Pages](https://github.com/groda/locate-me-now/actions/workflows/pages.yml/badge.svg)

### 🌟 Social
[![Stars](https://img.shields.io/github/stars/groda/locate-me-now?style=social)](https://github.com/groda/locate-me-now/stargazers)
[![Forks](https://img.shields.io/github/forks/groda/locate-me-now?style=social)](https://github.com/groda/locate-me-now/network/members)
