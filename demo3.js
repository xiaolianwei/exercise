// const fs = require('fs');
// const path = require('path');

// const dirname = path.resolve(__dirname,'./myfile','abc.txt');

// fs.readFile(dirname, function (err,data) {
//     console.log(data.toString());
// })

function fun() {
    // this = {name: 'foo'}
    return () => {
        return () => {
            return () => {
                console.log(this.name)
            }
        }
    }
}
var f = fun.call({
    name: 'foo'
})

// f = () => {
//     return () => {
//         return () => {
//             console.log(this.name)
//         }
//     }
// }

var t1 = f.call()()()
//
var t2 = f().call({
    name: 'baz'
})()
var t3 = f()().call({
    name: 'qux'
})