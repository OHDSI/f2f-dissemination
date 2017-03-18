var webpack = require('webpack');
var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './public');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.js',
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: 'app.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      path.join(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                sourcePath,
                path.join(__dirname, 'node_modules')
              ],
            },
          }
        ]   
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
  ],
  devServer: {
    contentBase: outPath,
    historyApiFallback: true,
    port: 3000,
    stats: {
      warnings: false
    },
    proxy: {
      '/api': 'http://localhost:3004',
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      /*{
        from: path.join(__dirname, 'resources/icons'),
        to: path.join(outPath, 'icons')
      }*/
    ])    
  ],
  node: {
    // workaround for webpack-dev-server issue 
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};
