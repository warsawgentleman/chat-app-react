var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

var PORT = 5000;
// Define the route and select the file - in this case it is index.html
app.get("/", function(req, res) {
  // res.sendFile(__dirname + "/index.html");
  res.send("hello");
});

// Listen 'connection' event, which is automatically send by the web client (no need to define it)
io.on("connection", socket => {
  // Listen 'chat message' event, which is sent by the web client while sending request
  socket.on("chat_message", data => {
    // we tell the client to execute 'new message'
    io.emit("chat_message", data);
  });
});

// Select the port to be listened by the server
server.listen(PORT, function() {
  console.log(`Listening on:${PORT}`);
});
