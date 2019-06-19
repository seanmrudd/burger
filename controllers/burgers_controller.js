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
        "burger_name"
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
        devoured: request.body.devoured
    }, condition, function(result){
        if(result.changedRows == 0){
            return result.status(404).end();
        } else {
            result.status(200).end();
        };
    });
});

router.delete("/api/burgers/:id", function(request, response){
    var condition = "id = " + request.params.id;
    Burger.update(condition, function(result){
        if(result.affectedRows == 0) {
            return result.status(400).end();
        } else {
            result.status(200).end();
        }
    })
})


module.exports = router;