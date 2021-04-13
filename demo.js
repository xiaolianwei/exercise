const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const server = http.createServer();

function isFile(dirname){
    let result;
    try{
        result = fs.statSync(dirname)
    }catch{
        return false;
    }
    if(result.isDirectory()){
        return false;
    }
    return true;
}

function getFileName(dirname){
    
    let result = isFile(dirname);
    if(result){
        return fs.readFileSync(dirname);
    }

    dirname = path.join(dirname,'index.html');
    result = isFile(dirname);
    if(result){
        return fs.readFileSync(dirname);
    }
    return null;
}

server.on('request', (req,res) => {
    const pathname = url.parse(req.url).pathname;
    let dirname = path.join(__dirname,'pulic',pathname);
    const type = mime.getType(dirname) ? mime.getType(dirname) : 'text/html'

    const content = getFileName(dirname);
    let state = content ? 200 : 404;

    res.writeHead(state,{
        'Content-type': `${type};charset=utf-8`
    })
    // console.log(state);
    if(content){
        res.end(content)
    } else {
        res.end('没有找到资源')
    }
    
    // console.log(content.toString('utf-8'));
    
})

server.listen(3000, () => {
    console.log('服务器启动了');
})