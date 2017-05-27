var express = require('express');
var router = express.Router();

var db = require("../models")
console.log(db.burger)
router.get("/",function(req,res){
	db.burger.findAll({}).then(function(result){
		res.render("index",{burger:result});
	});
});

router.put("/:id",function(req,res){
	db.burger.update({devoured:req.body.devoured},
		{where:{
		id:req.params.id
	},}).then(function(result){
		res.redirect("/");
	})


})
router.post("/",function(req,res){
	db.burger.create(req.body).then(function(){
		res.redirect("/");
	})
	.catch(function(err){
		console.log(err.erro)
		res.send("Sorry you must enter a burger which you would like to make, Please go back and try again")
	})
});

module.exports = router;