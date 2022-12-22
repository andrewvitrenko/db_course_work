const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: '1234567890',
  database: 'imbaza',
});

module.exports = connection;
