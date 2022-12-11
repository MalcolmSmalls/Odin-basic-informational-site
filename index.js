var http = require ('http'),
    fs = require('fs');

http.createServer( function ( request, response ) {

    fs.readFile('404.html', function readData (err,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end('404.html');
    }).listen(8080)


})