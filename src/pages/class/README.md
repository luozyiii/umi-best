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

demo dva 涉及目录
```
dva: {},                     // .umirc.ts 开启配置

/src/pages/class/dva         // 页面逻辑

/src/models/search.js        //

/src/services/search.js

/mock/search.js

```

#### 五、基于react context api 实现数据流管理
Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。
如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决方案。
使用 context 的通用的场景包括管理当前的 locale，theme，或者一些缓存数据。

demo context 涉及目录
```

/src/pages/class/context         // 页面逻辑

/src/models/search.js        //

/src/services/search.js

/mock/search.js

```

#### 六、LazyLoad组件开发【基于lazy 与 suspense 实现的懒加载组件】
- 启动按需加载: 该配置针对页面级别的按需加载
```
dynamicImport: {},
```

- 组件级别的懒加载
基于lazy 与 suspense 实现; 示例目录 /src/pages/lazy-load

- 进一步封装
封装好的组件目录 components/LazyLoad
使用： 在/src/pages/context/index.js 下的lists 组件实现懒加载





