const http = require('http');
const path = require('path');
const fs = require('fs');

async function getStat(filename){
    try{
        return await fs.promises.stat(filename);
    }catch{
        return null
    }
}

async function getFileContent(url){
    let filename = path.resolve(__dirname,'./assets',url.substr(1));
    const stat = await getStat(filename);
    
    if(!stat){
        return null;
    }else if(stat.isDirectory()){
        filename = path.resolve(filename,'index.html');
        let stat = await getStat(filename);
        if(stat) {
            return await fs.promises.readFile(filename);
        }else {
            return null;
        }
    }else{
        return await fs.promises.readFile(filename);
    }
}

const server = http.createServer(async (req, res) => {
    const info = await getFileContent(req.url);
    // console.log(info);
    if(info){
        res.write(info);
    }else{
        res.statusCode = 404;
        res.write('Resource is not exist')
    }
    res.end();
})

server.listen(3000, () => {
    console.log('server listen 3000');
})