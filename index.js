const net = require('net');
const server = net.createServer();

server.on('connection', socket => {
    console.log('服务器被访问了');
    socket.on('data', chunk => {
        console.log(chunk.toString('utf-8'));
    })

    socket.write(`HTTP/1.1 200 OK
Content-Type: text/html

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

server.on('listening', socket => {
    console.log('服务器启动了');
})
server.listen(3000)