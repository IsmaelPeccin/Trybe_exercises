const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: 'Peccin1234*',
  database: 'rest_exercicios'});

module.exports = connection;