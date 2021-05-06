import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store';
import { Button } from 'antd-mobile';

export default function (props) {
  // const [state, setState] = useState();
  const {
    user: { id, username, getUserAsync },
  } = useStoreHook();

  // useStateHook
  const states = useStateHook();
  console.log('states:', states);
  const user = useStateHook('user');
  console.log('user:', user);

  useDispatchHook;
  const dispatch = useDispatchHook();
  // user dispatch 此方法报错了
  const dispatchUser = useDispatchHook('user');

  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'leslie',
    });
  }, []);

  const handleClick = () => {
    // getUserAsync({
    //   id: 20,
    //   username: 'leslie02',
    // });
    dispatch({
      key: 'user',
      type: 'getUserAsync',
      payload: {
        id: 20,
        username: 'leslie02',
      },
    });
    // dispatchUser({
    //   type: 'getUserAsync',
    //   payload: {
    //     id: 20,
    //     username: 'leslie02',
    //   },
    // });
  };

  return (
    <div>
      <p>user-id:{id}</p>
      <p>user-name:{username}</p>
      <Button type="primary" onClick={handleClick}>
        change user info
      </Button>
    </div>
  );
}
