const Mock = require('mockjs');
const Class = require('../models/Class');

const result = Mock.mock({
    "datas|16": [{
        "id|+1": 0,
        name: "前端 @id 期",
        openDate: "@date", 
    }]
}).datas
console.log(result);

// Class.bulkCreate(result).then(res => {
//     console.log(res);
// });