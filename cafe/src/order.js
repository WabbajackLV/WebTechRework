//jshint esversion:6

const express = require("express");

const app = express();

app.get("/order", function(req, res){
    res.send("../public/order.html");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});