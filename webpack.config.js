module.exports = {
  entry: './source/app.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.',
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
