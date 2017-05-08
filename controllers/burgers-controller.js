var express = require('express');
var router = express.Router();

var db = require("../models")

router.get("/",function(req,res){
	db.burger.findAll({}).then(function(result){
		res.render("index",{burger:result});
	});
});

router.put("/:id",function(req,res){


	// burger.update({
	// 	devoured: req.body.devoured
	// },condition,function(){
	// 	res.redirect("/")
	// });
	console.log(req.body);
	db.burger.update({devoured:req.body.devoured},
		{where:{
		id:req.params.id
	},}).then(function(result){
		res.redirect("/");
	})
})
router.post("/",function(req,res){
	// if(req.body.burger_name === ""){
	// 	res.send("Name a burger you would like to eat");
	// }else{
	// 		burger.create([
	// 	"burger_name","devoured"],
	// 	[req.body.burger_name,req.body.devoured],
	// 	function(){
	// 		res.redirect("/");
	// 	})
	// }
	db.burger.create(req.body).then(function(){
		res.redirect("/");
	})
});

module.exports = router;