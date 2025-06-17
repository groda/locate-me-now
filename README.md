# 🚀 Where Am I?

Show your current location on a map 🌍.

## 🌐 Run on Glitch

Simply click the link below to run the app on Glitch:

[**Locate Me Now on Glitch**](https://locate-me-now.glitch.me/) 🚀

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
   `Your app is listening on port 59257` (port number may vary).
   Open [http://127.0.0.1:59257](http://127.0.0.1:59257) in your browser to view the app in action! 🌐

