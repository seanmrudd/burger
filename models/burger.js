var orm = require("../config/orm");

var Burger = {
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(response);
        });
    },
    create: function (columns, values, cb) {
        orm.create("burgers", columns, values, function(response) {
            cb(response);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(response){
            cb(response);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function(response){
            cb(response);
        });
    }
}

module.exports = Burger;