const http = require('http');
const querystring = require('querystring');
// const url = require('url')

const server = http.createServer();

server.on('request',(req,res) => {
    let postParams = '';
    req.on('data', chunk => {
        postParams += chunk;
    })
    req.on('end',() => {
        console.log(querystring.parse(postParams));
    })
    
    res.end('这是返回的响应');
    res.writeHead(200,{
        'Content-type': 'text/html;charset=utf-8'
    })
})

server.listen(3000,() => {
    console.log('服务器启动了');
})

// const server = http.createServer((req,res) => {
//     console.log(url.parse(req.url,true));
//     res.writeHead(200,{
//         'Content-type': 'text/html;charset=utf-8',
//     })
//     res.write('<h1>费劲儿上课了</h1>')
//     res.end()
// })

// server.listen(3000,() => {
//     console.log('listen server 3000');
// })

