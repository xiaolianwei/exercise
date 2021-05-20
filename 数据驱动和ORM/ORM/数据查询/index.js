// const adminSer = require('../services/adminService');
const studentSer = require('../services/studentService');
require('../models/relation');

studentSer.getStudents(2,20).then(res => console.log(res.data[0].Class))

// studentSer.getStudentById(572).then(res => {
//     console.log(res);
// })

// adminSer.login('abc','123').then(res => {
//     console.log(res);
// })

// adminSer.getAdmins().then(res => {
//     console.log(res);
// })

// adminSer.getAdminById(6).then(res => {
//     console.log(res);
// })