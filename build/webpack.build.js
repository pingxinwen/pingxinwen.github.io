const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.config.js')

module.exports = merge(baseconfig,{
  mode: 'production',
  output: {
    publicPath: './'
  },
  optimization: {
    runtimeChunk: 'single'
  }
})