const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename:'[name]-[contenthash:8].js',
    path: path.join(__dirname,'../','./dist'),
    chunkFilename: 'js/app-[contenthash:8].js'
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts','.tsx','.mdx'],
    alias:{
      '#':path.join(__dirname,'..','docs')
    },
    fallback: {
      fs:false
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/static/index.html',
      filename:'index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'css/[hash:8].css',
    }),
  ],
  module: {
    rules: [
      {
        test:/\.(png|jpg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[ext]',
              esModule: false
            }
          }
        ]
      },
      {
        test:/\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_mudules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader','@mdx-js/loader']
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
      },
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks:'all',
      minSize:0
    }
  }
}