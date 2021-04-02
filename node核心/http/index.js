let http = require('http');

let server = http.createServer();

server.on('request', (req,res) => {
    res.end('what the fuck!!');
})

server.listen(3000, () => {
    console.log('服务器已经启动');
})
