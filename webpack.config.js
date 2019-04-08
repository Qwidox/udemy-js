const path = require('path');

module.export = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	}
};