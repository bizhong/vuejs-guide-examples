// 使用 Webpack 的 DefinePlugin 来指定生产环境，
// 以便在压缩时可以让 UglifyJS 自动删除代码块内的警告语句。
var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}