const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "crudapp",
});

dbConnection.connect((err) => {
  if (err) {
    console.log("Connection failed ❌ \n", err);
  }
  console.log("Connected to DB ✅");
});

module.exports = dbConnection;