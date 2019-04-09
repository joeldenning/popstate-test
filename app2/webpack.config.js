const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/app2.js'),
  output: {
    filename: 'app2.js',
    path: __dirname + '/dist',
    library: 'app2',
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