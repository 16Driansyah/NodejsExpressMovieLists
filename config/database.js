const mysql = require('mysql');
//make connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbmovie',
    multipleStatements: true
});
// koneksi database
connection.connect(err => {
    if (err) throw err;
    console.log('connected to database');
}
);
module.exports = connection;