var connection = require("./connection");

var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (cols, vals, cb) {
    var queryString = "INSERT INTO burgers (burger) VALUES (?)";

    console.log(queryString);

    connection.query(queryString, req.body.burgerName, function (err, result) {
      if (err) {
        return res.status(500).end();
      }
      cb(result);
    });
  },
  update: function (objColVals, condition, cb) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"

    console.log(queryString);
    connection.query(queryString, [true, req.params.id],
      function (err, result) {
      if (err) {
        return res.status(500).end();
      }
      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;