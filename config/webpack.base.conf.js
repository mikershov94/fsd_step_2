const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {

    entry: {
        app: PATHS.src + 'index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: PATHS.dist
    },

    module: {
        rules: [
			{
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true },
						config: { path: __dirname + '../' }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					},
				]
			},
		]
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/main.css'
		}),
		new CleanWebpackPlugin
	]

}