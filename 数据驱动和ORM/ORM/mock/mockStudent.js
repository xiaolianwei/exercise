const Mock = require('mockjs');
const student = require('../models/Student');

const result = Mock.mock({
    "datas|500-600": [{
        name: "@cname",
        birthdady: "@date",
        "sex|1-2": true,
        "mobile": /1\d{10}/,
        "ClassId|1-16": 0
    }],
}).datas;

student.bulkCreate(result).then(res => console.log(res)); 