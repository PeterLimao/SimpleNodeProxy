var Http = require('http');
var Fs = require('fs');
var Url = require('url');
var Path = require('path');
var Types = require('./mine').types;
var Proxy = require('./proxy');

var proxyTarget = '';

var server = Http.createServer(function (req, res) {
    var url = Url.parse(req.url);

    if (url.pathname.indexOf('/api') > 0) {
        proxy.start(proxyTarget, req, res);
    } else {
        getFile(url, req, res);
    }
});

var getFile = function (url, req, res) {
    var filePath = Path.join('./webapp', url.pathname);

    console.log(filePath);

    Fs.stat(filePath, function (err, stats) {
        if (err) {
            console.log('file not exist!');
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('File not exist!');
        } else {
            if (!stats.isFile()) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.end('File not exist!');
                return;
            }

            Fs.readFile(filePath, 'binary', function (err, data) {
                if (err) {
                    console.log('file read error!');
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end(err);
                    return;
                }

                var extName = Path.extname(filePath).substring(1);
                res.writeHead(200, {
                    'Content-Type': Types[extName] || 'text/plain'
                });
                res.write(data, 'binary');
                res.end();
            });
        }
    });
};

exports.start = function (port, target, callback) {
    proxyTarget = target;
    server.listen(port, callback);
};
