
var fs = require('fs');

fs.open('./my.txt','w',function (err,fd){
    if(err){
        return console.log('文件打开失败');
    }
    fs.write(fd,'地上都是湿的',function (err,fd2){
        if(err){
            return console.log("文件写入失败")
        }
        fs.close(fd2,function(err){
            console.log('文件保存并关闭');
        })
    })
})
console.log('open后的代码');