var http = require('http');

var server = http.createServer(function(req,res){
    res.end('holle world')
})

server.listen(8000,'127.0.0.1',function(){
    console.log('服务器运行在：hppt://localhost');
})