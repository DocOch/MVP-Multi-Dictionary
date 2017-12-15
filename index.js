const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

app.use(express.static('node_modules')); //exposes files to client
app.use(express.static('dist'));
app.get('/', function(req, res){
	// display the homepage
	// res.send('<div><p>hi</p></div>') 
	// express has res.sendFile
	res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.post('/', function(req, res){
	// search a term
})

app.set('port', 8080);
app.listen(app.get('port'), function(err){
	if(err){
		console.error(err);
	}else {
		console.log("listening on port 8080");
	}
});
