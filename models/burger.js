var orm = require("../config/orm");

var Burgers = {
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(res);
        })
    },
    create: function (columns, values, cb) {
        orm.create("burgers", columns, values, function(response) {
            cb(response);
        })
    },
    update: function ()
}