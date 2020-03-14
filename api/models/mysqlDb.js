'use strict';

var mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PW,
    database: 'nodeRestShop'
});

con.connect(err => {
    if(err) throw err;
    console.log("Connected To MySql DB");
});

module.exports = con;