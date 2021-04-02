const net = require('net');
const server = net.createServer();

server.listen(9527);

server.on('listening', () => {
    console.log('服务器开启了');
})

server.on('connection', socket => {
    console.log('服务器被访问了');

    socket.on('data', chunk => {
        console.log(chunk.toString('utf-8'));
    })

    socket.write(`HTTP/1.1 200 OK
Content-Type:image/jpeg

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1>思科技术</h1>
</body>
</html>`)
socket.end();
})

// const socket = net.createConnection(
//     {
//         host: 'duyi.ke.qq.com',
//         port: 80
//     },
//     () => {
//         console.log('连接成功');
//     }
// )

// socket.on('data',chunk => {
//     console.log('来自服务器的消息',chunk.toString("utf-8"));
//     socket.end();
// })

// socket.write(`GET / HTTP/1.1
// Host: duyi.ke.qq.com
// Connection: keep-alive

// `)

// socket.on("close", () => {
//     // console.log(receive.body);
//     console.log("结束了！");
// });