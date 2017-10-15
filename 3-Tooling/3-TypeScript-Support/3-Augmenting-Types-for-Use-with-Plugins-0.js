// 声明 Vue 插件补充的类型

// 插件可以增加 Vue 的全局/实例属性和组件选项。
// 在这些情况下，在 TypeScript 中制作插件需要类型声明。
// 庆幸的是，TypeScript 有一个特性来补充现有的类型，叫做模块补充 (module augmentation)。

// 例如，声明一个 `string` 类型的实例属性 `$myProperty`：
// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $myProperty: string
  }
}

// 在你的项目中包含了上述作为声明文件的代码之后 (像 `my-property.d.ts`)，
// 你就可以在 Vue 实例上使用 `$myProperty` 了。
var vm = new Vue()
console.log(vm.$myProperty) // 将会顺利编译通过

// 你也可以声明额外的属性和组件选项：
import Vue from 'vue'

declare module 'vue/types/vue' {
  // 可以使用 `namespace` 替代 `interface`
  // 来声明全局属性
  namespace Vue {
    const $myGlobal: string
  }
}

// ComponentOptions 声明于 types/options.d.ts 之中
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}

// 上述的声明允许下面的代码顺利编译通过：
// 全局属性
console.log(Vue.$myGlobal)

// 额外的组件选项
var vm = new Vue({
  myOption: 'Hello'
})