console.log("Hello World");
var express = require('express');
var app = express();
/*app.get("/",function(req,res){
	res.send("Hello Express");
});*/
/*var rutaAbsoluta = __dirname+"//views/index.html"; 
app.get("/",function(req,res){
	res.sendFile(rutaAbsoluta);
});
var absoluteRoot = __dirname+"/public";
app.use("/public",express.static(absoluteRoot));*/
app.get("/json",function(req,res){
	res.json({"message":"Hello json"});
});



































 module.exports = app;
