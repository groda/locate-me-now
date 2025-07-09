FROM node
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app
COPY . .
# Expose the port your Node.js application listens on.
EXPOSE 3000
CMD ["node","server.js"]
