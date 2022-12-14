const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello World! Working");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})














// const http = require('http')

// const hostname = "127.0.0.1"
// const port = 8000;

// const server = http.createServer(function ( request, response) {
//     response.writeHead(200, { "Content-Type" : "text/plain"})

//     response.end('Hello World\n')
// })

// server.listen(port, hostname, function () {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
