import React, { useState, useEffect } from 'react';
import { useTitleHook, useHtttpHook } from '@/hooks';

export default function (props) {
  const [state, setState] = useState('customize');
  const title = useTitleHook(state);

  useEffect(() => {}, []);

  const handleClick = () => {
    setState('customize changed!');
  };

  const [listResult, loading] = useHtttpHook({
    url: '/getListsAsync',
    method: 'get',
    watch: [state],
  });
  console.log(listResult, loading);

  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  );
}
