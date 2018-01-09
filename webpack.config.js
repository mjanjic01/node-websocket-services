const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const DEV = process.env.NODE_ENV !== 'production';


const styleLoader = {
  use: [{
    loader: 'css-loader'
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: [
        path.resolve(__dirname, './client/assets/styles')
      ]
    }
  }]
};

const config = {
  entry: './client/application.js',

  output: {
    publicPath: '/assets',
    path: path.resolve(__dirname, './server/public/assets'),
    filename: '[name]-[hash].js'
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'client'),
      path.resolve(__dirname, 'client/assets/styles'),
      'node_modules'
    ]
  },

  module: {
    rules: [{
      test: /\.(jpg|png|svg|eot|ttf|woff)$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract(styleLoader)

    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: path.resolve(__dirname, './template.html'),
      filename: path.resolve(__dirname, './server/public/index.html')
    }),
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin('[name]-[contenthash].min.css'),
    new CleanWebpackPlugin(['server/public/assets'])
  ]
};

if (!DEV) {
  config.plugins = [
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin()
  ];
} else {
  config.devtool = 'source-map';
  config.stats = 'errors-only';
}


module.exports = config;
