const path = require('path');

const config = {
	entry: './src/Client/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		  { test: /\.js$/,
		  	loader: 'babel-loader',
		    exclude: /node_modules/
		  }
	    ]
	}
}

module.exports = config;
