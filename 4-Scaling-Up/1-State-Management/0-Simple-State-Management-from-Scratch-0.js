// 如果你有一处需要被多个实例间共享的状态，
// 可以简单地通过维护一份数据来实现共享：

const sourceOfTruth = {}

const vmA = new Vue({
  data: sourceOfTruth
})

const vmB = new Vue({
  data: sourceOfTruth
})

// 现在当 `sourceOfTruth` 发生变化，
// `vmA` 和 `vmB` 都将自动的更新引用它们的视图。
// 子组件们的每个实例也会通过 `this.$root.$data` 去访问。

// 但是，调试将会变为噩梦。任何时间，我们应用中的任何部分，在任何数据改变后，都不会留下变更过的记录。
// 为了解决这个问题，我们采用一个简单的 store 模式：

var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

// 需要注意，所有 `store` 中 `state` 的改变，都放置在 `store` 自身的 `action` 中去管理。
// 这种集中式状态管理能够被更容易地理解哪种类型的 `mutation` 将会发生，以及它们是如何被触发。
// 当错误出现时，我们现在也会有一个 log 记录 bug 之前发生了什么。

// 此外，每个实例/组件仍然可以拥有和管理自己的私有状态：

var vmA = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})

var vmB = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})