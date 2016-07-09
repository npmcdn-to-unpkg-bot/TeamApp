var express = require('express');
app = express();
server = require('http').createServer(app);

var config = {
    rootPath: __dirname
};

require('./server/config/express')(app, config);
require('./server/config/routes')(app);

server.listen(3000, function(){
  console.log("Servidor Corriendo en el Puerto 3000");
});