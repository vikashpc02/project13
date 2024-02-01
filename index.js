var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Project #13 - Deploy NodeJS app on AWS EC2 instance'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
