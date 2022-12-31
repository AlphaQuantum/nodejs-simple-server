const http = require('http')
const fs = require('fs');

const hostname = 'localhost'
const port = 3333

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("./index.html", null, function(error, data){
        if(error){
            res.writeHead(404)
            res.write("File not Found")
        }else{
            res.write(data)
        }
        res.end();
    });
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})