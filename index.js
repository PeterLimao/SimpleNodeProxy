var HttpServer = require('./src/httpServer');

var PORT = 8000;
var TARGET = process.argv[2];

HttpServer.start(PORT, TARGET, function () {
    console.log('Listening on ' + PORT + ' port...');
    console.log('Proxying host is: ' + TARGET);
});
