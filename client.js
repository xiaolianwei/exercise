const net = require('net');

const client = net.createConnection({
    host: 'localhost',
    port: 3000
},() => {
    console.log('连接成功');
});

let template = ``;
client.on('data', chunk => {
    // console.log(chunk.toString());
    template += chunk.toString('utf-8');
    // chunk.end();
})

client.on('end', () => {
    console.log(template);
})

client.write(`GET / HTTP/1.1
Host: localhost
Connection: keep-alive

`);