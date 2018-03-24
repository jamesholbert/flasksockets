// var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname,"static");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
				test: /\.css$/,
  				loader: ["style-loader","css-loader"]
			},
	        {
	       		test: /\.(png|jpg|gif)$/,
	      		use: [
	        		{
			            loader: 'file-loader',
			            options: {}  
	          		}
	        	]
	        }
	    ]
	}
};

module.exports = config;