const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Brendon');
});

server.listen(4000);