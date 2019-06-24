var express = require("express");
var router = express.Router();
var Burger = require("../models/burger");

router.get("/", function(request, response) {
    Burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(request, response) {
    Burger.create([
        "burger_name", 
    ], [
        request.body.burger_name
    ], function(result) {
        response.json({id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);
    Burger.update({
        devoured: true
    }, condition, function(result){
        response.json(result);
    });
});

module.exports = router;