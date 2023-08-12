const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Niraj123@",
    database: "android1"
});
connection.connect((err) => {
    if (err) throw err;
    else {
        console.log('Database Connection Established Successfully!');
    }
});
module.exports = connection;
