const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.write('what the fuck!');
    res.end();
})

server.listen(3000,() => {
    console.log('listen server 3000');
})