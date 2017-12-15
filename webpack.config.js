const path = require('path');

const config = {
	entry: './src/Client/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		   { // include: path.resolve(__dirname, 'src'),
		    // query: {presets: ["react", "es2015"]},
		   test: /\.js$/,
		  	loader: 'babel-loader',
		    // exclude: /node_modules/
		  }
	    ]
	}
}

module.exports = config;
