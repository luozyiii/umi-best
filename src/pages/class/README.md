### 笔记
#### 一、注意或技巧
- 文件目录不能用关键字命名
- vscode 插件project-tpl； 快速生成页面模块
- vscode 插件JavaScript and TypeScript Nightly

#### 二、React 组件生命周期
component-old.js
component-new.js
pure-component.js

#### 三、React 组件通信(props和state)
目录： pages/class/lists
- 父组件向子组件传值 (父组件绑定props给子组件使用)
- 子组件向父组件传值 (父组件提供方法给子组件调用)
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
dva 是一个基于redux 和 redux-saga 的数据流方案, 然后为了简化开发体验，dva还额外内置了react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。

demo dva 涉及目录
```
dva: {},                     // .umirc.ts 开启配置

/src/pages/class/dva         // 页面逻辑

/src/models/search.js        // 数据

/src/services/search.js      // 请求

/mock/search.js              // mock 数据

```

示例流程：
异步调用：
在dva/search.js 输入aaa, 回车enter, 调用 models/search.js 的异步方法 getListsAsync，该异步方法再调用 services/search 里的 getLists方法 发起mock 请求，
接收/mock/search.js mock 返回的数据；models/search.js 里再调用同步方法 getLists, 数据重新渲染到页面。
同步调用：
在dva/search.js，也可以同步调用getLists
思考：如何开发的时候关闭mock?然后代理真实测试环境服务器
在.umirc.ts 关闭mock 增加 proxy配置 

```
mock: false,
proxy: {
  '/api': {
    target: 'http://127.0.0.2:7002/',
    changeOrigin: true,
  },
},
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

理解：
- React.createContext：创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据
```
const {Provider, Consumer} = React.createContext(defaultValue);
```
- Provider(生产者): 和他的名字一样。用于生产共享数据的地方。生产什么呢？ 那就看value定义的是什么了。value:放置共享的数据。
```
<Provider value={/*共享的数据*/}>
  /*里面可以渲染对应的内容*/
</Provider>
```
- Consumer(消费者):这个可以理解为消费者。 他是专门消费供应商(Provider 上面提到的)产生数据。Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue
```
<Consumer>
  {value => /*根据上下文  进行渲染相应内容*/}
</Consumer>
```


#### 六、LazyLoad组件开发【基于lazy 与 suspense 实现的懒加载组件】
- 启动按需加载: 该配置针对页面级别的按需加载
```
dynamicImport: {},
```

- 组件级别的懒加载
基于lazy 与 suspense 实现; 示例目录 /src/pages/class/lazy-load

- 进一步封装
封装好的组件目录 components/LazyLoad
使用： 在/src/pages/class/context/index.js 下的lists 组件实现懒加载

- 理解：
Suspense 让你的组件在渲染之前进行“等待”，并在等待时显示 fallback 的内容。

#### 七、ErrorBoundary组件开发【基于React错误边界技术实现的组件】
常见问题：在render引入不存在的变量，直接导致白屏

- 核心API： getDerivedStateFromError

在全局布局页面 /src/layouts 引入 ErrorBoundary组件
ErrorBoundary组件只能检测子组件发生的错误，不能检测本身发生的错误。
示例：pages/class/context 

这个不是万能的，当遇到点击事件的内部函数、异步函数的内部函数报错是无法检测的。

#### 八、Modal组件开发【基于createPortal 创建自定义弹窗组件】
示例目录 /src/pages/class/modal => /components/Modal => /components/CreatePortal

核心
ReactDOM.createPortals(child, container)
这个方法需要两个参数，第一个参数是需要挂载的组件实例，而第二个参数则是要挂载到的DOM节点。
一般来说第一个参数可能传递的是需要挂载的 this.props.children

#### 九、使用 ref api 来操作dom和组件
Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

在典型的 React 数据流中，props 是父组件与子组件交互的唯一方式。要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。

核心：createRef 和 forwardRef (引用传递)
>引用传递（Ref forwading）是一种通过组件向子组件自动传递 引用ref 的技术。

何时使用Ref ？
下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。 （示例 /src/pages/class/refs）
- 触发强制动画。
- 集成第三方 DOM 库。



