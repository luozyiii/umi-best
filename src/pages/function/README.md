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