console.log("Hello World");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
/*app.get("/",function(req,res){
	res.send("Hello Express");
});*/
/*var rutaAbsoluta = __dirname+"//views/index.html"; 
app.get("/",function(req,res){
	res.sendFile(rutaAbsoluta);
});
var absoluteRoot = __dirname+"/public";
app.use("/public",express.static(absoluteRoot));*/
/*app.get("/json",function(req,res){
	if(process.env.MESSAGE_STYLE==="uppercase"){
	res.json({"message":"hello json".toUpperCase()});
	}else{
	res.json({"message":"Hello json"});
	}
});*/
/*app.use(function(req,res,next){
	console.log(req.method req.path - req.ip);
	next();
});*/
/*app.get("/now",function(req,res,next){
req.time = new Date().toString();
next();
},
function(req,res){
res.json({time : req.time});
}
);*/
/*app.get("/:word/echo",function(req,res){
  res.json({echo : req.params.word})
});*/
/*app.get("/name",function(req,res){
  res.json({name: `${req.query.first} ${req.query.last}`})
}); //name? first=firstname & last=lastname (nota:El Cliente pone esto en la url y ahí divista el objeto resultante)*/
app.use(bodyParser.urlencoded({extended: false}));




































 module.exports = app;
