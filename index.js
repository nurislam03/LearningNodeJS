var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('object');
});
server.listen(8080);
consol.log('server is running at 8080 port');