// ORDER PRODUCT

// access our products.js model (server/models/products.js)
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());

module.exports = (function(){

	return {

		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log("Error getting data");
				}
				else{
					res.json(results);
				}
			})
		},

		create: function(req, res){
			Customer.create(req.body, function(err, results){
				if(err){
					console.log(err);
				}
				else{

					res.json(results);
				}
			})
		},


		remove: function(req, res, id){
			Customer.remove({_id: id}, function(err){
				if(err){
					res.send('error finding id to remove')
				}
				else{
					Customer.find({}, function(err, results){
						if(err){
							console.log("error from database!");
						}
						else{
							res.json(results);
						}
					});
				}
				
			});
		},


	}




})();