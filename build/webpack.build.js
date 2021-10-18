const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.config.js')

module.exports = merge(baseconfig,{
  mode: 'production',
  output: {
    publicPath: 'https://blog.pingxinwen.com/'
  },
  optimization: {
    runtimeChunk: 'single'
  }
})
