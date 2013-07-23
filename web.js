var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync("index.html");
  var buffer = new Buffer(content.toString(),"utf-8");  
response.send(buffer.toString());
});


app.use("/static",express.static(__dirname+"/static"));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
