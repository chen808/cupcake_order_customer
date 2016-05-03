// CONTROLLER PRODUCT

// access our products.js model (server/models/products.js)
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){

	return {

		getOrders: function(req, res){
			Product.find({}, function(err, results){
				if(err){
					console.log("Error getting data");
				}
				else{
					res.json(results);
				}
			})
		},


		createProduct: function(req, res){
			console.log(req.body);
			Product.create({customer_name:req.body.name, product_name:req.body.product, quantity:req.body.quantity} , function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},




	}




})();