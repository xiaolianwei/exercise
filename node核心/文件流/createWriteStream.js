const fs = require('fs');
const path = require('path');

async function method1() {
    const from = path.resolve(__dirname, './myfile/demo.txt');
    const to = path.resolve(__dirname, './myfile/index.txt');
    console.time('方法1');
    const content = await fs.promises.readFile(from);
    await fs.promises.writeFile(to, content)
    console.timeEnd('方法1')
    console.log('复制完成');
}

function method2(){
    const from = path.resolve(__dirname, './myfile/demo.txt');
    const to = path.resolve(__dirname, './myfile/index.txt');
    // console.time('方法2');
    const rs = fs.createReadStream(from)
    const ws = fs.createWriteStream(to)
    rs.on('data', chunk => {
        // flag = ws.write(chunk);
        ws.write(chunk);
        // if(!flag){
            // rs.pause();
        // }
    })
    // ws.on('drain',() => {
    //     rs.resume();
    // })

    rs.on('close',() => {
        ws.end();
        // console.timeEnd('方法2');
        console.log('复制完成了');
    })
   
}

async function method3(){
    const from = path.resolve(__dirname, './myfile/demo.txt');
    const to = path.resolve(__dirname, './myfile/index.txt');
    const rs = fs.createReadStream(from)
    const ws = fs.createWriteStream(to)
    
    console.time('方法3')
    rs.pipe(ws);

    rs.on('close', () => {
        console.timeEnd('方法3')
    })
   
}

method3();