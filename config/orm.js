var connection = require("../config/connection");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, tableInput, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (tableName, objColVal, condition, cb) {
    var queryString = "UPDATE" + tableName;
    queryString += "SET";
    queryString += objColVal;
    queryString =+ "WHERE";
    queryString =+ condition;

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
       throw err
      }
      cb(result);
    });
  }
};

module.exports = orm;