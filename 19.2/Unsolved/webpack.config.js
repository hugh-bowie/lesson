const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: 'src/app.js',
	output: {
		path: path.join(__dirname + '/dist'),
		filename: 'bundle.js',
	},
	
	mode: 'development',
};

// plugins: [
//   new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery',
//   }),
// ],