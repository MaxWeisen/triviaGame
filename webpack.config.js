const path = require('path');
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './Client/App/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react",
            {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          ]
          },
          
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
       }
    ]
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000',
      '/api' : 'http://localhost:3000'
    }
  }
}