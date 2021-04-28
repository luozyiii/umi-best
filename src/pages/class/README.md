### 笔记
#### 一、注意或技巧
- 文件目录不能用关键字命名
- vscode 插件project-tpl； 快速生成页面模块

#### 二、React 组件生命周期


#### 三、React 组件通信(props和state)
- 父组件向子组件传值
- 子组件向父组件传值
- 兄弟组件之间传值 (使用父组件作为中间项)
思考：当兄弟组件层级嵌套太深，这种方法就不适用了。 dva

prop-types
主要作用：对props中数据类型进行检测及限制

```
import PropTypes from 'prop-types' // 引用

// 基本用法 用来检测数据类型
componentsName.PropTypes = {
  参数变量: PropTypes.类型
}
// 例子
myComponents.PropTypes = {
  name: Proptypes.string
}
```

#### 四、Dva数据处理及数据mock
dav 是一个基于redux 和 redux-saga 的数据流方案, 然后为了简化开发体验，dva还额外内置了react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。

demo search 涉及目录
```
dva: {},                     // .umirc.ts 开启配置

/src/pages/class/dva         // 页面逻辑

/src/models/search.js        //

/src/services/search.js

/mock/search.js

```





