const http = require('http');
const url = require('url')

const server = http.createServer((req,res) => {
    console.log(url.parse(req.url,true));
    res.writeHead(200,{
        'Content-type': 'text/html;charset=utf-8',
    })
    res.write('<h1>费劲儿上课了</h1>')
    res.end()
})

server.listen(3000,() => {
    console.log('listen server 3000');
})