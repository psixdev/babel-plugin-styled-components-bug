const path = require('path');

module.exports = {
	mode: 'none',

	entry: path.resolve('src/index.jsx'),

	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.jsx', '.js']
	},

	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					plugins: [
						[
							'babel-plugin-styled-components',
							{displayName: true}
						]
					]
				}
			}
		]
	}
};
