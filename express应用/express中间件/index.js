const express = require('express');
const http = require('http');

const app = express();

app.get('/news', (req, res, next) => {
    console.log('hander1');
    // res.status(200);
    // res.send('浪费角色了开发');
    // res.end();
    
    // next(new Error('abc'))
    next();
})

app.get('/news', (req, res, next) => {
    console.log('hander2');
    next();
})

app.use('/news', require('./errorMiddleware'));

app.listen(9527, () => {
    console.log('server listen on 9527');
})