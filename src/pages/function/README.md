### React Hooks开发及自定义hook (16.8 的新特性)

#### react hook api-新的组件开发模式
源码目录：/src/pages/function/hook

- useState 方法


- useEffect 方法
第一个参数：函数
第二个参数：没有传第二参数 页面每次改变都会刷新; []: 只在渲染的时候执行一次; [count]: count值改变的时候会重新执行useEffect

可以写多个，彼此之间互不影响

- useEffect 和 useLayoutEffect 区别？
useEffect: 做异步相关的操作
useLayoutEffect: 操作dom对象或者改变显示效果
其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新

- useMeno
作用：主要做性能方面的优化，避免被误重新渲染
你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。

- useCallback
作用：主要做性能方面的优化，
把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

#### useContext和useReducer实现数据流管理
- useContext
接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。

当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

别忘记 useContext 的参数必须是 context 对象本身：
正确： useContext(MyContext)
错误： useContext(MyContext.Consumer)
错误： useContext(MyContext.Provider)
调用了 useContext 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 通过使用 memoization 来优化。

- useReducer
useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）

在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。

#### useTitleHook【根据url修改页面title的自定义hook】

- 目录
pages/function/customize
src/hooks/useTitleHook

- 利用了useLayoutEffect

#### useHttpHook【基于fetch api 封装具有监测功能的自定义hook】
- 目录
pages/function/customize
src/hooks/useHttpHook

#### 使用think-react-store实现数据处理【基于React context 和 hook的数据流解决方案】
[think-react-store](https://cpagejs.github.io/think-react-store/)

- 目录
pages/function/store

- 安装
```
yarn add think-react-store
```

- 使用中间件 think-react-store/middlewares/log 打印日志
```
import log from 'think-react-store/middlewares/log';

// 注意是数组写法
<StoreProvider store={store} middleware={[log]}>
  <User />
</StoreProvider>
```

- 遇到问题
useDispatchHook('user'); 使用失败 报错

#### Fiber 架构
Fiber 是 React 16 中新的协调引擎。它的主要目的是使 Virtual DOM 可以进行增量式渲染。
Fiber 即是React新的调度算法
Fiber 架构将整个渲染阶段分为了调度阶段和提交阶段

- Fiber 架构解决了什么问题
在页面元素很多，且需要频繁刷新的场景下，React 15 会出现掉帧的现象。
其根本原因，是大量的同步计算任务阻塞了浏览器的 UI 渲染。默认情况下，JS 运算、页面布局和页面绘制都是运行在浏览器的主线程当中，他们之间是互斥的关系。
如果 JS 运算持续占用主线程，页面就没法得到及时的更新。
当我们调用setState更新页面的时候，React 会遍历应用的所有节点，计算出差异，然后再更新 UI。整个过程是一气呵成，不能被打断的。
如果页面元素很多，整个过程占用的时机就可能超过 16 毫秒，就容易出现掉帧的现象。

针对这一问题，React 团队从框架层面对 web 页面的运行机制做了优化，得到很好的效果。

- Fiber 的实现
React 框架内部的运作可以分为 3 层：

Virtual DOM 层，描述页面长什么样。
Reconciler 层，负责调用组件生命周期方法，进行 Diff 运算等。
Renderer 层，根据不同的平台，渲染出相应的页面，比较常见的是 ReactDOM 和 ReactNative。
这次改动最大的当属 Reconciler 层了，React 团队也给它起了个新的名字，叫Fiber Reconciler。这就引入另一个关键词：Fiber。

先看一下stack-reconciler下的 React 是怎么工作的。代码中创建（或更新）一些元素， React 会根据这些元素创建（或更新）Virtual DOM，然后 React 根据更新前后 Virtual DOM 的区别，去修改真正的 DOM。注意，在 stack reconciler 下，DOM 的更新是同步的，也就是说，在 Virtual DOM 的比对过程中，发现一个 Instance 有更新，会立即执行 DOM 操作。

而Fiber Reconciler下，操作是可以分成很多小部分，并且可以被中断的，所以同步操作 DOM 可能会导致 fiber-tree 与实际 DOM 的不同步。对于每个节点来说，其不光存储了对应元素的基本信息，还要保存一些用于任务调度的信息。因此，fiber 仅仅是一个对象，表征 reconciliation 阶段所能拆分的最小工作单元，和上图中的 react instance一一对应。通过stateNode属性管理 Instance 自身的特性。通过child和sibling表征当前工作单元的下一个工作单元，return表示处理完成后返回结果所要合并的目标，通常指向父节点。整个结构是一个链表树。每个工作单元（fiber）执行完成后，都会查看是否还继续拥有主线程时间片，如果有继续下一个，如果没有则先处理其他高优先级事务，等主线程空闲下来继续执行。

Fiber 就是一种数据结构，它可以用一个纯 JS 对象来表示：
```
const fiber =  {
  stateNode: {}, // 管理 Instance 自身的特性
  child: {},     // 表征当前工作单元的下一工作单元
  sibling: {},   // 表征当前工作单元的下一工作单元
  return: {},    // 表示处理完成后返回结果所要合并的目标，通常指向父节点
}
```

流程图
setState等修改state操作 => 放入更新队列 => 使用requestAnimationFrame处理高优先级任务(例如：用户点击，鼠标点击等操作) / 使用requestldleCallback 处理低优先级任务(查找根节点，或者转发成FiberNode) => 查找根节点将其转化成FiberNode => 处理下一个FiberNode(深度优先遍历) => 浏览器是否空闲 

=> 否 => 任务暂停 => 空闲的时候继续执行 => 处理下一个FiberNode => 生成完整的diff effectList => 应用diff dom, 更新视图
=> 是 => 处理下一个FiberNode => 生成完整的diff effectList => 应用diff dom, 更新视图

- 示例
当前页面包含一个列表，通过该列表渲染出一个 button 和一组 Item，Item 中包含一个 div，其中的内容为数字。通过点击 button，可以使列表中的所有数字进行平方。另外有一个按钮，点击可以调节字体大小。

页面渲染完成后，就会初始化生成一个fiber-tree，这一过程与初始化 Virtual DOM Tree 类似。

同时，React 还会维护一个workInProgressTree，workInProgressTree用于计算更新，完成 reconciliation 过程。

用户点击平方按钮后，利用各个元素平方后的 list 调用 setState，React 会把当前的更新送入 list 组件对应的update queue中。但是 React 并不会立即执行对比并修改 DOM 的操作。而是交给 scheduler 去处理。
scheduler 会根据当前主线程的使用情况去处理这次 update。为了实现这种特性，使用了requestIdelCallbackAPI。对于不支持这个 API 的浏览器，react 会加上 pollyfill。

总的来讲，通常，客户端线程执行任务时会以帧的形式划分，大部分设备控制在 30-60 帧是不会影响用户体验；在两个执行帧之间，主线程通常会有一小段空闲时间，requestIdleCallback可以在这个 空闲期（Idle Period） 调用 空闲期回调（Idle Callback），执行一些任务

1、低优先级任务由requestIdleCallback处理；
2、高优先级任务，如动画相关的由requestAnimationFrame处理；
3、requestIdleCallback可以在多个空闲期调用空闲期回调，执行任务；
4、requestIdleCallback方法提供 deadline，即任务执行限制时间，以切分任务，避免长时间执行，阻塞 UI 渲染而导致掉帧；


整个过程，简单来说，先通过requestIdleCallback获得可用的时间片，然后检查节点的update queue看是否需要更新，每处理完一个节点都会检查时间片是否用完，如果没用完，根据其保存的下一个工作单元的信息处理下一个节点。

- Fiber 对hook的影响

- Fiber 架构对组件生命周期的影响

调度阶段(尽量不使用不建议调度阶段的方法，比如请求接口操作)
componentWillMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate

提交阶段(不能终止)
componentDidMound
componentDidUpdate
componentWillUnmount

- 文档参考
[React Fiber](https://www.kancloud.cn/chenmk/web-knowledges/1144475)

