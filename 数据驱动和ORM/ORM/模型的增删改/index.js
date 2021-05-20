// const Admin = require('../models/Admin');
const adminSer = require('../services/adminService');

// adminSer.addAdmin({
//     loginId: 'def',
//     loginPwd: '789',
//     name: '王五',
// }).then(ins => {
//     console.log(ins);
// })

// adminSer.deleteAdmin(8).then(res => console.log(res))

adminSer.updateAdmin(4,{
    loginId: 'gskgo',
}).then(res => console.log(res))

// const instancs = Admin.build({
//     loginId: 'abc',
//     loginPwd: '123',
//     name: '张三',
// })
// instancs.save().then(() => {
//     console.log('新建管理员成功');
// })

// Admin.create({
//     loginId: 'qwe',
//     loginPwd: '456',
//     name: '李四',
// }).then((ins) => {
//     console.log(ins);
// })