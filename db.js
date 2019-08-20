'user strict';

const mysql = require('mysql');
const fs = require("fs");

// var config = require("../../config/config");

// const connect_string = process.env.PRODDB_CONNECTION;
// const connectString = Buffer.from(connect_string, 'base64').toString('ascii');

// const dbOptions = JSON.parse(connectString);
// dbOptions["ssl"] = {
//   "ca": config.aws_rds_ca
// };
// console.log(dbOptions);


//local mysql db connection
const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    port: process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB,
    ssl : {
        ca: fs.readFileSync(__dirname + '/aws-rds.pem')
    }
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;