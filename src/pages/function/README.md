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