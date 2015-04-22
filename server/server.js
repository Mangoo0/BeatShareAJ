var express = require("express");
var logger = require("morgan");
var jade = require("jade");

var path = require('path');

var router = require("./routes/index.js")

var app = express();
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(3000, function() {
    console.log("server running");


})