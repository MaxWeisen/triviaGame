const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve('./Client/App/index.js'),
  output: {
    path: path.resolve(__dirname, 'build', 'Client'),
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
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devServer: {
    publicPath: 'http://localhost:8080/',
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
}