const Book = require('../models/Book');

exports.addBook = async function (adminObj) {
    const instance = await Book.create(adminObj);
    return instance.toJSON();
}

exports.deleteBook = async function (id) {
    const result = await Book.destroy({
        where: { id }
    })
    return result;
}

exports.updateBook = async function (id,adminObj) {
    const result = await Book.update(adminObj, {
        where: { id }
    });
    return result;
}