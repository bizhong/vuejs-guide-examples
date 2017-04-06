// 对于 .capture 和 .once事件修饰符，Vue 提供了相应的前缀可以用于 on：
// Modifier(s)                     Prefix
// .capture                        !
// .once                           ~
// .capture.once or .once.capture  ~!

on: {
  '!click': this.doThisInCapturingMode,
  '~keyup': this.doThisOnce,
  '~!mouseover': this.doThisOnceInCapturingMode
}

// 对于其他的修饰符，前缀不是很重要，因为你可以直接在事件处理函数中使用事件方法：
// Modifier(s)                                Equivalent in Handler
// .stop                                      event.stopPropagation()
// .prevent                                   event.preventDefault()
// .self                                      if (event.target !== event.currentTarget) return
// Keys:.enter, .13                           if (event.keyCode !== 13) return (change 13 to another key code for other key modifiers)
// Modifiers Keys:.ctrl, .alt, .shift, .meta  if (!event.ctrlKey) return (change ctrlKey to altKey, shiftKey, or metaKey, respectively)

on: {
  keyup: function (event) {
    // 如果触发事件的元素不是事件绑定的元素
    // 则返回
    if (event.target !== event.currentTarget) return
    // 如果按下去的不是 enter 键或者
    // 没有同时按下 shift 键
    // 则返回
    if (!event.shiftKey || event.keyCode !== 13) return
    // 阻止事件冒泡
    event.stopPropagation()
    // 阻止该元素默认的 keyup 事件
    event.preventDefault()
    // ...
  }
}