var userModel = require('./user.js');
var express = require('express');
var app = express();
var Routes = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json({ type: 'application/json' }));

var mongoose = require('mongoose');

var db = 'mongodb://raghavkumar:katra500@ds137720.mlab.com:37720/demo';
mongoose.connect(db, function(err, data){
	if(err){
		console.log("err", err);
		process.exit(0)
	}else{
		console.log("mongo db connected");
	}
})
var port = process.env.PORT || 8080;

app.get('/hello', function(request, response){
	console.log("hello API get response");
	response.send({message: 'hello API get response'});
})

app.post('/userData', function(req, res){
	console.log("dd", req.body);
	var storeData = new userModel(req.body);
    storeData.save((err, result) => {
    	console.log("result", result);
        if(err || result == null ) {
            console.log("err", err);
            if (err){
                return res.json(400,{"data" : err})           
            } else{
                return res.json(400,{"data" : result})           
            }
        } else{
            return res.json(200,{"data" : result})           
        }
    })

})

app.listen(port);

console.log('Magic happens at http://localhost:' + port);
