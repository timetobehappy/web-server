




var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);

		next();
	}

};

//Looks like postion of this after the above definition does matter here
module.exports = middleware;