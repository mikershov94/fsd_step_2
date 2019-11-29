const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',

    devtool: 'cheap-inline-module-source-map',

    devServer: {
        contentBase: path.join(__dirname, '../'),
        open: true,
        overlay: true,
        stats: 'errors-only',
        port: 3000,
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
})