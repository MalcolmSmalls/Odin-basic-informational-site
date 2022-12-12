const http = require('http')
const fs = require('fs')
const url = require('url')


http.createServer(function (request, response) {
    const query = url.parse(request.url, true)
    const file = "." + query.pathname + ".html"
    fs.readFile(file, function(err, data) {
        if (err) {
            response.writeHead(404, {'Content-Type' : 'text/html'})
            return response.end(
                fs.readFileSync('./404.html', function(err, data){
                    if (err) throw (err);
                    return data
                })
            )
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data)
        return response.end();
  })
  
}).listen(8080);


console.log('Server running')