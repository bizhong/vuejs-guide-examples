// tsconfig.json
{
  "compilerOptions": {
    // ... 已省略其它选项
    "allowSyntheticDefaultImports": true,
    "lib": [
      "dom",
      "es5",
      "es2015.promise"
    ]
  }
}

// 请注意 `allowSyntheticDefaultImports` 选项允许你使用下列语法：
import Vue from 'vue'

// 而不是这种：
import Vue = require('vue') // 注：老语法

// 我们更为推荐前者 (ES 模块语法)，因为他跟原生的 ES 用法更为一致，
// 而且在未来，我们计划把官方声明全部搬迁到 ES 风格的导出方式。

// 另外呢，如果你是搭配 webpack 2 使用 TypeScript，那么以下配置也很推荐：
{
  "compilerOptions": {
    // ... 已省略其他配置
    "module": "es2015",
    "moduleResolution": "node"
  }
}

// 这句选项告诉 TypeScript 不要处理 ES 模块引入语句 (译注：import .. from ..)。
// 这样 webpack 2 就可以充分利用其基于 ES 模块的 tree-shaking (译注一种在抽象语法树中减除未被使用的死代码的优化技术，简称`摇树优化`)。