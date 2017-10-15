// 用打包工具

// 1. Webpack
// 使用 Webpack 的 DefinePlugin 来指定生产环境，
// 以便在压缩时可以让 UglifyJS 自动删除代码块内的警告语句。例如配置：
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

// 2. Browserify
// 运行打包命令，设置 `NODE_ENV` 为 `"production"`。等于告诉 `vueify` 避免引入热重载和开发相关代码。
// 使用一个全局 envify 转换你的 bundle 文件。这可以精简掉包含在 Vue 源码中所有环境变量条件相关代码块内的警告语句。例如：
// shell
NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js

// 3. Rollup

// 使用 rollup-plugin-replace：
const replace = require('rollup-plugin-replace')
rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
}).then(...)