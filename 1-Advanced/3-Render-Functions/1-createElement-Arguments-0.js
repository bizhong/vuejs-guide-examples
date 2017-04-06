// createElement 函数参数
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签字符串，组件选项对象，或者一个返回值类型为String/Object的函数，必要参数
  'div',
  // {Object}
  // 一个包含模板相关属性的数据对象
  // 这样，您可以在 template 中使用这些属性.可选参数.
  {
    // 和`v-bind:class`一样的 API
    'class': {
      foo: true,
      bar: false
    },
    // 和`v-bind:style`一样的 API
    style: {
      color: 'red',
      fontSize: '14px'
    },
    // 正常的 HTML 特性
    attrs: {
      id: 'foo'
    },
    // 组件 props
    props: {
      myProp: 'bar'
    },
    // DOM 属性
    domProps: {
      innerHTML: 'baz'
    },
    // 事件监听器基于 "on"
    // 所以不再支持如 v-on:keyup.enter 修饰器
    // 需要手动匹配 keyCode。
    on: {
      click: this.clickHandler
    },
    // 仅对于组件，用于监听原生事件，而不是组件内部使用 vm.$emit 触发的事件。
    nativeOn: {
      click: this.nativeClickHandler
    },
    // 自定义指令. 注意事项：不能对绑定的旧值设值
    // Vue 会为您持续追踪
    directives: [
      {
        name: 'my-custom-directive',
        value: '2'
        expression: '1 + 1',
        arg: 'foo',
        modifiers: {
          bar: true
        }
      }
    ],
    // Scoped slots in the form of
    // { name: props => VNode | Array<VNode> }
    scopedSlots: {
      default: props => h('span', props.text)
    },
    // 如果组件是其他组件的子组件，需为slot指定名称
    slot: 'name-of-slot'
    // 其他特殊顶层属性
    key: 'myKey',
    ref: 'myRef'
  },
  // {String | Array}
  // 子节点(VNodes)，可以是一个字符串或者一个数组. 可选参数.
  [
    createElement('h1', 'hello world'),
    createElement(MyComponent, {
      props: {
        someProp: 'foo'
      }
    }),
    'bar'
  ]
)