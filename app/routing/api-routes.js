// ================ Dependencies ==================
var friendsObject = require('../data/friends.js');
var path = require('path');

// =================== Exports ======================
module.exports = function(app){
	
	app.get('/api/friends', function(req,res) {
	    res.json(friendsObject);
	});

	app.post('/api/friends', function(req,res) {
	    friendsObject.push(req.body);
	});

}