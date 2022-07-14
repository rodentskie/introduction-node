const mysql = require("mysql2");

const start = () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "seminar",
    password: "admin",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return pool.promise();
};

module.exports = start;
