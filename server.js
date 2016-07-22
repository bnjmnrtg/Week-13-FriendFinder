// ================ Dependencies==================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// =============== Calling Express===============
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// =================== Routing =====================
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// =============== Listening To PORT ================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})