var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var tempTest = 1;


var middleware = require('./middleware.js');

app.use(middleware.logger); // App level middleware say for logging web requests

/*app.get('/', function(req, res){
	res.send('Hello Express');
})*/

app.get('/about', middleware.requireAuthentication, function(req, res){ // route level middleware for say logging this particulat web request
	res.send('About Us!');
})

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function(){
	console.log('Express server started on port ' + PORT + '!');
});
