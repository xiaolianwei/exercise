const http = require('http');
const url = require('url');

function handleReq(req){
    console.log('有请求来了');
    const urlObj = url.parse(req.url);
    console.log(req.url);
    console.log(urlObj);
    console.log('请求方法：',req.method);
    console.log('请求头：',req.headers);

    let content = '';
    req.on('data', data => {
        content += data.toString('utf-8');
    })
    req.on('end',() => {
        console.log('请求体',content);
    })
}

const server = http.createServer((req,res) => {
    handleReq(req);
    res.setHeader("a",1);
    res.setHeader("b",2);
    res.statusCode = 200;
    res.write('你好');
    res.end();
})

server.listen(3000, () => {
    console.log('server listen 3000');
});
