const http = require('http');

const server = http.createServer((req, res) => {
    res.end("hello");
    return server;
})

module.exports = {server};