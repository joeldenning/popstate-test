const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/app1.js'),
  output: {
    filename: 'app1.js',
    path: __dirname + '/dist',
    library: 'app1',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}