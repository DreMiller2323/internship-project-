// lib/db.js
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'DollipDaisy23!',
  database: 'new_project',
  port: 3306,
});

export default db;
