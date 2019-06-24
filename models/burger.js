var orm = require("../config/orm");

var Burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (response) {
            cb(response);
        });
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (response) {
            cb(response);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
}

module.exports = Burger;