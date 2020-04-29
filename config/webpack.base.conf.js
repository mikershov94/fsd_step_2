const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../../dist'),
	static: path.join(__dirname, '../static'),
};

const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));

module.exports = {

	entry: {
		app: PATHS.src + '/index.js'
	},
	output: {
		filename: 'js/app-[hash:7].js',
		path: PATHS.dist,
    },

    module: {
        rules: [

			{
				test: /\.pug$/,
				use: [
					{ loader: 'pug-loader' }
				]
			},

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
						options: { 
							sourceMap: true,
							config: { path: __dirname }
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					},
				]
			},

			{
				test: /\.(png|gif|jpe?g)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name]-[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.(svg)$/,
				loader: 'url-loader',
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]',
						}
					}
				]
			},
		]
	},

	
	
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			
		}),

		new MiniCssExtractPlugin({
			filename: 'css/main-[hash:7].css'
		}),
		new CleanWebpackPlugin(),

		...PAGES.map(page => new HtmlWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `./${page.replace(/\.pug/, '.html')}`
		})),

		new CopyWebpackPlugin([
			{ from:  `${PATHS.static}/img`, to: `${PATHS.dist}/img` },
			{ from:  `${PATHS.static}/svg`, to: `${PATHS.dist}/svg` },
			{ from:  `${PATHS.static}/icons`, to: `${PATHS.dist}/icons` },
			{ from:  `${PATHS.static}/fonts`, to: `${PATHS.dist}/fonts` },
		]),
	]

}