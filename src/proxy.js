var HttpProxy = require('http-proxy');

var proxy = HttpProxy.createProxyServer({});

proxy.on('error', function (err, req, res) {
    console.log(err);
    res.writeHead(500, {
        'content-type': 'text/plain'
    });
    res.write('proxy errors!');
    res.end(err);
});

proxy.on('proxyReq', function (proxyReq, req, res, options) {
    proxyReq.path = req.url.replace('/api', '');
});

exports.start = function (target, req, res) {
    console.log('Starting proxy, host is: ' + target);
    proxy.web(req, res, {
        target: target
    });
};
