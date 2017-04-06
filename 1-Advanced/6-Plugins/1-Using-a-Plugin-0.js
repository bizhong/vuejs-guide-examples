// 通过全局方法 Vue.use() 使用插件：

// 调用 MyPlugin.install(Vue)
Vue.use(MyPlugin)

// 也可以传入一个选项对象：

Vue.use(MyPlugin, { someOption: true })

// Vue.use 会自动阻止注册相同插件多次，届时只会注册一次该插件。
// 一些插件，如：vue-router。如果 Vue 是全局变量则自动调用 Vue.use()。不过在模块环境中应当始终显式调用 Vue.use()：

// 通过 Browserify 或 Webpack 使用 CommonJS 兼容模块
var Vue = require('vue')
var VueRouter = require('vue-router')

// 不要忘了调用此方法
Vue.use(VueRouter)