// Dependencies--------------

var express = require("express");
//var bodyParer = require("body-parser");


// Creating Express Server

var app = express();

// set as initial port . we will use this later in our listner

var PORT = process.env.PORT || 8080;

// Set up the express app to handle data parsing

//app.use(bodyParer.urlencoded({extended: true}));
//app.use(bodyParer.json);

// Routers

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listner

app.listen(PORT, function(){
    console.log( "App Listening on PORT: "+ PORT);
});