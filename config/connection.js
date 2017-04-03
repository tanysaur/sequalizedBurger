// Set up MySQL connection.
var mysql = require("mysql");

var connectionInfo = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "rootpassword",
  database: "burgers_db"
});

if(process.env.JAWSDB_URL){
  connectionInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectionInfo);



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
