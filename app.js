//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");


const app = express();

app.set(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use(express.static("public"));


app.get("/", function(req,res){
    res.render("home");
});

app.listen(process.env.PORT || 3000, function(req,res){
    console.log("Sever started on port 3000");
});