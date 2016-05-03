// PRODUCTS.JS
// /server/models/friend.js

var mongoose = require('mongoose');

// creating our ProductSchema
var ProductSchema = new mongoose.Schema({
	customer_name:String,
	product_name:String,
	quantity:Number,
	date:{ type: Date, default: Date.now }
});

mongoose.model('Product', ProductSchema);