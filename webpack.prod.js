const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // configure webpack to copy all img resources to the dist folder
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/client/index.js',
	optimization: {
		minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})],
	},
	output: {
		libraryTarget: 'var',
		library: 'Client',
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
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
			// refer below index.html
			template: './src/client/views/index.html',
			// and create a new index.html in dist folder
			filename: './index.html',
		}),
		new CopyPlugin({
			patterns: [{ from: './src/client/media', to: './media' }],
		}),
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		// new WorkboxPlugin.GenerateSW({}),
	],
};
