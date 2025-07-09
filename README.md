![locate-me-now](https://socialify.git.ci/groda/locate-me-now/image?custom_language=Node.js&font=Source+Code+Pro&language=1&logo=https%3A%2F%2Fcdn.glitch.global%2F6c31fb7f-564c-4070-b8a2-6a84d079e5cd%2Fkoala-4373467_640.png%3Fv%3D1727655948257&name=1&owner=1&pattern=Solid&theme=Light)

# 🚀 Where Am I?

Show your current location on a map 🌍.

## 🌐 Run in CodeSandbox

[![Edit my-codesandbox-app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/groda/locate-me-now?embed=1)

## 🐳 Run in Docker 

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

```
docker compose up --build -d
```

5. **Open [http://localhost:3000/](http://localhost:3000/) in your browser

The port $3000$ is hard-coded in `Dockerfile`, `compose.yml`, and in `server.js`.

6. **Stop/restart**

Stop the container with:
```
docker compose down
```

Start (without re-building image):

```
docker compose up -d
```

## 💻 Run on Your Local Machine

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

## ~~🌐 Run on Glitch~~ 

Simply click the link below to run the app on Glitch:

[**Locate Me Now on Glitch**](https://locate-me-now.glitch.me/) 🚀

> **Note:** The app is hosted on **Glitch**, which will be shutting down its app hosting infrastructure soon. Please refer to the [announcement](https://blog.glitch.com/post/changes-are-coming-to-glitch/) for more details. In the future, I might need to consider migrating to another hosting platform. 💡

## 🛰️ How It Works

The app uses the **Geolocation API** provided by modern browsers to determine your current location. It leverages the `getCurrentPosition()` function, which you can learn more about in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition). This function retrieves the geographic location of your device, allowing the app to display your position on a map! 🌍📍


