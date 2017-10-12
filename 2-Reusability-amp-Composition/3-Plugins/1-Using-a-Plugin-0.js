// 通过全局方法 `Vue.use()` 使用插件：

// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

// 也可以传入一个选项对象：

Vue.use(MyPlugin, { someOption: true })

// `Vue.use` 会自动阻止注册相同插件多次，届时只会注册一次该插件。
// Vue.js 官方提供的一些插件（例如 `vue-router`）在检测到 `Vue` 是可访问的全局变量时会自动调用 `Vue.use()`。
// 然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 `Vue.use()`：

// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
var Vue = require('vue')
var VueRouter = require('vue-router')

// 不要忘了调用此方法
Vue.use(VueRouter)

// awesome-vue（https://github.com/vuejs/awesome-vue#components--libraries） 集合了来自社区贡献的数以千计的插件和库。