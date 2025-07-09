// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function (request, response) {
  // response.sendFile(__dirname + '/views/centered-list.html');
  console.log(request.url);
  response.sendFile(__dirname + '/views'+request.url, {}, function(err){
    console.log(err);
    response.end(JSON.stringify({error:"page not found"}));
  });
  
});

// listen for requests :)
// Define the port your app will listen on.
// It will try to use process.env.PORT if available (which we'll set in Docker Compose),
// otherwise, it will default to 3000.
const PORT = process.env.PORT || 3000; 

// Use the 'PORT' constant you defined, which includes the fallback
var listener = app.listen(PORT, function () {
  console.log(`Your app is listening on port ${PORT}`);
});
