var express = require('express');
var router = express.Router();

var db = require("../models")

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
});

module.exports = router;