const express = require("express")
const app = express()
const path = require('path')
const port = 3000
const logger = (req, res, next) => {
    // req.protocol = gets http, req.get('host') = gets host, req.originalUrl = gets page.
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html' ))
// });

// app.use(logger)

app.use('/api/members', require('./routes/api/members'))



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
