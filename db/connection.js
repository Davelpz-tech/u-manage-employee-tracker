const mysql = require('mysql2');
// establish connection to database -----------------------------------------------
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employee'
    },
    console.log('Connected to employee database.')
);
// catchall err -----------------------------------------------
db.connect((err) => {
    if(err) throw err;
});
db.connect();
// export db -----------------------------------------------
module.exports = db;