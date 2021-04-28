import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';

export default function (props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('text-demo');

  /**
   * useEffect 方法
   * 第一个参数：函数
   * 第二个参数：没有传第二参数 页面每次改变都会刷新; []: 只在渲染的时候执行一次; [count]: count值改变的时候会重新执行useEffect
   */
  useEffect(() => {
    console.log('useEffect');
    // fetch('/api/getLists');
    Demo();
  }, [count]);

  useEffect(() => {
    console.log('useEffect-2');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []);

  const Demo = async () => {
    console.log('demo');
  };

  // const handleCount = () => {
  //   setCount(count + 1);
  // };

  const handleCount = useCallback(() => {
    console.log('count changed');
    setCount(count + 1);
  }, [count]);

  const noCacheText = () => {
    console.log('text changed');
    return text;
  };

  const memoText = useMemo(() => {
    console.log('text changed memo');
    return text;
  }, [text]);

  return (
    <div>
      <h1 onClick={handleCount}>count:{count}</h1>
      {/* <p>text: {noCacheText()}</p> */}
      <p>text: {memoText}</p>
    </div>
  );
}
