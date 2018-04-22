const { join } = require('path')

module.exports = {
  mode: (process.env.NODE_ENV === 'production' ? 'production' : 'development'),
  entry: './assets/main.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: join(__dirname, '../dist/static'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' }
        ]
      }
    ]
  },
  target: 'web',
  externals: []
}
