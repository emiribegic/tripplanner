const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Configure webpack to copy all img resources to the dist folder

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/client/index.js',
	stats: 'verbose',
	output: {
		clean: true, // Clean the output directory before emit
	},
	devServer: {
		host: 'localhost',
		port: 8000,
		proxy: {
			context: () => true,
			target: 'http://localhost:8081',
			secure: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			// Refer below index.html
			template: './src/client/views/index.html',
			// and dynamically create a new index.html in dist folder
			filename: './index.html',
		}),
		// Ref: https://www.npmjs.com/package/copy-webpack-plugin
		new CopyPlugin({
			patterns: [
				// Copy images and make a img folder in dist for the reference
				{ from: './src/client/media', to: './media' },
			],
		}),
	],
};
