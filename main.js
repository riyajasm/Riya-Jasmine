import {a,b,c}  from "./mymodule.js"
console.log(a,b,c)
import riya from "./mymodule.js"
console.log(riya)
// const x = require("./mymodule2.js")
// console.log(x)
let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);