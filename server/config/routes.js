// ROUTES.JS

// require customer controller
var customer = require('./../controllers/customers.js');

// require products controller
var product = require('./../controllers/products.js');



module.exports = function(app){

	// GETS ===========================================
	app.get('/customers', function(req, res){
		customer.index(req, res);
	})

	app.get('/getOrders', function(req, res){
		product.getOrders(req, res);
	})

	app.get('/remove/:id', function(req, res){
		customer.remove(req, res, req.params.id);
	})



	// POSTS ===========================================
	app.post('/customersAdd', function(req, res){
		customer.create(req, res);
	})

	app.post('/newPoll', function(req, res){
		question.new_poll(req, res);
	})











	app.post('/createOrder', function(req, res){
		product.createProduct(req, res);
	})




};