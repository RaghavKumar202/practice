var express = require('express');
var app = express();
var Routes = express.Router();

var port = process.env.PORT || 8080;
app.get('/hello', function(request, response){
	console.log("hello API get response");
})
app.listen(port);

console.log('Magic happens at http://localhost:' + port);
