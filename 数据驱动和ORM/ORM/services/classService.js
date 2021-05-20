const Class = require('../models/Class');

exports.addClass = async function (adminObj) {
    const inc = await Class.create(adminObj);
    return inc.toJSON();
}

exports.deleteClass = async function (id) {
    return await Class.destroy({
        where: { id }
    })
}

exports.update = async function (id, adminObj) {
    return await Class.update(adminObj, {
        where: { id }
    })
}