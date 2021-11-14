const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.config.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseconfig,{
  mode: 'production',
  output: {
    publicPath: 'https://blog.pingxinwen.top/'
  },
  optimization: {
    runtimeChunk: 'single'
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: 'src/static/404.html',
      filename:'404.html',
      inject:false,
    }),
  ]
})
