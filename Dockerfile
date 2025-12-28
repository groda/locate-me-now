# Use an official Node.js LTS image (slim version for smaller size)
FROM node:20-slim

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port 3000 (good for documentation)
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]