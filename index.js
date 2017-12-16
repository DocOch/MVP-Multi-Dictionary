const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const $ = require('jQuery');

const app = express();

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.json());
app.use(express.static('node_modules')); //exposes files to client
app.use(express.static('dist'));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.post('/lookup', function(req, res){
	// search a term
	console.log('request is', req.body)
	console.log(JSON.stringify($))
	$.ajax({
      type: 'POST',
      url: 'https://translation.googleapis.com/language/translate/v2',
      data: {
      	'q': req.body.query,
      	'source': 'en', // will be dynamic later
      	'target': 'fr', //will be dynamic later
      	'format': 'text'
      },
      contentType: 'application/json', //sending
      datatype : "application/json", // recieving
      Authorization: 'Bearer access_token',
      success: function(translation){
      	console.log('translation is',translation)
      	//res.send(translation)
      },
    });
    console.log('hello!!!!')
	res.send(req.body.query)
})

app.set('port', 8080);
app.listen(app.get('port'), function(err){
	if(err){
		console.error(err);
	}else {
		console.log("listening on port 8080");
	}
});
