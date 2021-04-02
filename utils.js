const util = require('util');

// function foo(d) {
//     return new Promise((resolve,rejects) => {
//         setTimeout(() => {
//             resolve(true)
//         }, d);
//     })
// }

// const bar = util.callbackify(foo);
// bar(3000,function(err,result){
//     console.log(result);
// })

// function foo(delay,callback){
//     setTimeout(() => {
//         callback(null,true)
//     }, delay);
// }

// const bar = util.promisify(foo);

// bar(3000).then(res => {
//     console.log(res);
// })

const obj = {
    a: 'aaa',
    b: 'b',
    c: {
        d: 'ddd'
    }
}

const obj2 = {
    a: 'aaa',
    b: 'b',
    c: {
        d: 'd'
    }
}

console.log(util.isDeepStrictEqual(obj,obj2));