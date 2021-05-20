const Student = require('../models/Student');
const Class = require('../models/Class');

exports.addStudent = async function (adminObj) {
    const inc = await Student.create(adminObj);
    return inc.toJSON();
}

exports.deleteStudent = async function (id) {
    return await Student.destroy({
        where: { id }
    })
}

exports.updateStudent = async function (id, adminObj) {
    return await Student.update(adminObj, {
        where: { id }
    })
}

exports.getStudentById = async function (id) {
    const result = await Student.findByPk(id);
    if(result) {
        return result.toJSON();
    }
    return null;
}

exports.getStudents = async function ({
    page = 1,
    limit = 10,
    id = null,
}) {
    const result = await Student.findAndCountAll({
        // attributes: ["id", "name", "sex", "birthdady"],
        include: [Class],
        offset: (page - 1) * limit,
        limit: +limit,
        where: {
            sex: 1
        }
    });
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows)),
    }
}