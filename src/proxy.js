var HttpProxy = require('http-proxy');

var proxy = HttpProxy.createProxyServer({});

proxy.on('error', function (err, req, res) {
    res.writeHead(500, {
        'content-type': 'text/plain'
    });
    console.log(err);
    res.write('proxy errors!');
    res.end(err);
});

exports.start = function (target, req, res) {
    console.log('代理开始, 代理host为: ' + target);
    proxy.web(req, res);
};
