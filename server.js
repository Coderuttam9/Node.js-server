const http = require('http');
const colors = require('colors');
const dotenv = require('dotenv').config();

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 6060;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello sir this uttam roy please check your ')
});

server.listen(PORT, hostname, () => {
    console.log(`Server is runnin on http://${hostname}:${PORT}`.bgBlack.red);
})