/*<---------------------------------------------------------->*/
//Express setup
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/*<---------------------------------------------------------->*/
//Handlebars setup
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

/*<---------------------------------------------------------->*/
//Import routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

/*<---------------------------------------------------------->*/
//Start server
app.listen(PORT, function() {
    console.log("listening on http://localhost:" + PORT);
});

