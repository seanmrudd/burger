var orm = require("../config/orm");

var Burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(response) {
            cb(response);
        });
    },
    create: function (vals, cb) {
        orm.insertOne("burgers", vals, function(response) {
            cb(response);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(response){
            cb(response);
        });
    },
}

module.exports = Burger;