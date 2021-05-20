const Admin = require('../models/Admin');

exports.addAdmin = async function (adminObj) {
    const instance = await Admin.create(adminObj);
    // console.log(instance.toJSON);
    return instance.toJSON()
}

exports.deleteAdmin = async function (adminId) {
    const result = await Admin.destroy({
        where: {
            id: adminId
        }
    })
    return result;
}

exports.updateAdmin = async function (id,adminObj) {
    const result = await Admin.update(adminObj,{
        where: { id }
    });
    return result;
}

exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd,
        },
    });
    if(result && result.loginId === loginId && result.loginPwd === loginPwd) {
        return result.toJSON();
    }
    return null
}

exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if(result) {
        return result.toJSON();
    }
    return null;
}

exports.getAdmins = async function () {
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result));
}