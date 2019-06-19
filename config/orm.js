var connection = require("./connection");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
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
        return res.status(500).end();
      }
      cb(result);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"

    console.log(queryString);
    connection.query(queryString, [true, req.params.id],
      function (err, result) {
      if (err) {
        return res.status(500).end();
      }
      cb(result);
    });
  }
};

module.exports = orm;