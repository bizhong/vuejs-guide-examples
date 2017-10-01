// 自定义选项将使用默认策略，即简单地覆盖已有值。
// 如果想让自定义选项以自定义逻辑混合，可以向 `Vue.config.optionMergeStrategies` 添加一个函数：

Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // return mergedVal
}

// 对于大多数对象选项，可以使用 `methods` 的合并策略：

var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods

// 更多高级的例子可以在 Vuex 的 1.x 的混合策略里找到：

const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
  if (!toVal) return fromVal
  if (!fromVal) return toVal
  return {
    getters: merge(toVal.getters, fromVal.getters),
    state: merge(toVal.state, fromVal.state),
    actions: merge(toVal.actions, fromVal.actions)
  }
}