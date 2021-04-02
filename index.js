const fs = require('fs');
const path = require('path');
const dirname = path.resolve(__dirname,'./myfile/demo.txt');
// fs.readFile(dirname,'utf-8',function(err,result){
//     console.log(result);
// })

// fs.promises.readFile(dirname,'utf-8').then(res => {
//     console.log(res);
// })

// fs.writeFile(dirname,'追加的',{flag:'a'},function(err,result){
//     console.log(result);
// })

// fs.stat(dirname,(err,res) => {
//     console.log(res.isFile());
// })

const dirname2 = path.resolve(__dirname,'./myfile/item');
// fs.readdir(dirname2,(err,res) => {
//     console.log(res);
// })

fs.mkdir(dirname2,(err,res) => {
    // console.log(err);
    console.log(res);
})