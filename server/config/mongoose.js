
var path = require("path");
var fs = require("fs");
const mongoose = require("mongoose");

var models_path = path.join(__dirname, "./../models");
fs.readdirSync(models_path).forEach(function(file){
    if(file.endsWith(".js")){
        require(models_path + "/" + file);
    }
})

mongoose.connect("mongodb://localhost:27017/neighborhood_dev",{useNewUrlParser: true })