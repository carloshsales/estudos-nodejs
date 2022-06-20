const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url === '/') return res.end('<h1>HOME PAGE</h1>')

    if(req.url === '/about') return res.end('<h1>ABOUT</h1>')
    
}).listen(7070, () => {console.log('SERVER IS RUNNING')})