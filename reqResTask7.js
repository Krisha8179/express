const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    // process.exit();
    if(url ==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if (url ==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome about Us page</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if (url ==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to nodejs project</h1></body>');
        res.write('</html>');
        res.end();
    }
});
    

server.listen(4000);

