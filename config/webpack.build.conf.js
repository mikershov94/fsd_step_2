const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',

    devtool: 'source-map',

    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            vendor: {
                test: /[\\/]node_modules[\//]/,
                name: 'vendors',
                chunks: 'all',
            }
        },
        usedExports: true
    }
})