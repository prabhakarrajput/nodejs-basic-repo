// How to create web server ?

const http = require('http')

http.createServer(function(request, response){
    response.writeHead(200,{'content-type' : 'test/html'})
    response.end("Hello World, Welcome to nodeJS")
}).listen(8080)