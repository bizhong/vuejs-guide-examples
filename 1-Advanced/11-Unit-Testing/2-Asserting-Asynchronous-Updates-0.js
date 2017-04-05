import Vue from 'vue'
import MyComponent from './MyComponent.vue'

describe('MyComponent', () => {
  // 在状态更新后检查生成的 HTML
  it('updates the rendered message when vm.message updates', done => {
    const vm = new Vue(MyComponent).$mount()
    vm.message = 'foo'
    
    // 在状态改变后和断言 DOM 更新前等待一刻
    Vue.nextTick(() => {
      expect(vm.$el.textContent).toBe('foo')
      done()
    })
  })
})