var fs = requires('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync("index.html");
  var buffer = new Buffer(content.toString(),"utf-8");  
response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
