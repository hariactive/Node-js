// let http = require("http");
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write("Congratulation! You have succesfully created a localhost");
//     res.write(req.www.google.com);
//     res.end();
// }).listen(8080);

const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

