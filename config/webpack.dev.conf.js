const path = require('path');

module.exports = {
    mode: 'development',

    devtool: 'cheap-inline-module-source-map',

    devServer: {
        contentBase: path.join(__dirname, '../'),
        overlay: true,
        stats: 'errors-only',
        port: 3000,
        historyApiFallback: true,
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}