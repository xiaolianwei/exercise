const mysql = require('mysql2/promise');

async function foo (id, name) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'companydb',
    })
    const sql = 'select * from team where ID=? and `name`=?;'
    const [results] = await connection.execute(sql, [id, name]);
    console.log(results[0].name);
    connection.end();
}

foo(2, '公牛队');