import React, { useState, useEffect } from 'react';
import { useTitleHook } from '@/hooks';

export default function (props) {
  const [state, setState] = useState('customize');
  const title = useTitleHook(state);

  useEffect(() => {}, []);

  const handleClick = () => {
    setState('customize changed!');
  };

  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  );
}
