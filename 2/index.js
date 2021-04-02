const fs = require('fs');
const { dir } = require('node:console');

const path = require('path');

const from = path.resolve(__dirname,'./index.txt');
const to = path.resolve(__dirname,'./demo.txt');

async function copy(from,to){
    const context = await fs.promises.readFile(from);
    await fs.promises.writeFile(to,context);
    console.log('复制完成');
}

copy(from,to);

fs.promises.readFile('D:/a.txt').then(data => {
    console.log(data);
}, err => {
    console.error(err);
})