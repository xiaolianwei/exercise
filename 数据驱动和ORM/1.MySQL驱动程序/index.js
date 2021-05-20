const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'companydb',
})

connection.query(
    "delete from team where ID=6;",
    (err,result) => {
        console.log(result);
    }
)