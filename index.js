var HttpServer = require('./src/httpServer');

var PORT = 8000;
var TARGET = 'http://test01.gitstars.cn';

HttpServer.start(PORT, TARGET, function () {
    console.log('现在代理服务正运行在' + PORT + '端口...');
});
