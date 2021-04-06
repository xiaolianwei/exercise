const http = require('http');

const request = http.request('http://yuanjin.tech:5005/api/movie',{
    method: "GET"
},resp => {
    console.log('服务器的状态码',resp.statusCode);
    console.log('服务器响应头',resp.headers);
    let content = '';
    resp.on('data',data => {
        content += data.toString('utf-8');
    }) 
    resp.on('end',() => {
        console.log(JSON.parse(content));
    })
});
request.end();