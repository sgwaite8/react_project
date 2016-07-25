var webpack = require('webpack');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'source-map',
  entry: "./src/script.js",
  output: {
    path: __dirname + "/public/javascripts/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
