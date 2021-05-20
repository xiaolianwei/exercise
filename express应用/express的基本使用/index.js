const express = require('express');
const http = require('http');
const app = express();

app.get('/abc/:id', (req,res) => {
    console.log('请求头：', req.headers);
    console.log('请求路径：', req.path);
    console.log('请求参数：', req.query);
    console.log('params', req.params);

    // res.send("<h1>这是响应的内容</h1>");
    res.setHeader('a',"123");
    // res.send({
    //     id: 123,
    //     name: '成哥',
    //     age: 88,
    // });
    // res.send([1,2,3])
    res.status(301).header('location', 'https://duyi.ke.qq.com').end();
})

app.get('*', (req,res) => {
    console.log('abc');
})

app.listen(9527, () => {
    console.log('server listen on 9527');
})