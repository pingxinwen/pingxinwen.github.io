const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.config.js');

module.exports = merge(baseconfig,{
    mode:'development',
    output: {
        publicPath: '/'
    },
    devServer: {
        port:2021,
        historyApiFallback:true,
        // for use in gitpod
        allowedHosts: 'all'
    }
});