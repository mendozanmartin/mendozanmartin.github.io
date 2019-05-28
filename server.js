var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

var serveStatic = require('serve-static');
app.set('port', (process.env.PORT || 5000));

app.use(serveStatic(__dirname + "/public"));



server.listen(app.get('port'), function(){
  console.log('listening on *:5000');
});
