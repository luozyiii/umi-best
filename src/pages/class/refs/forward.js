import React, { forwardRef } from 'react';

const inputForward = forwardRef((props, ref) => {
  return (
    <div>
      姓名：
      <input ref={ref} />
    </div>
  );
});

export default inputForward;
