import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';

export default function (props) {
  // const [state, setState] = useState();
  const { state } = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <div>
      <p>user:</p>
      <p>user-id:{state.user.id}</p>
      <p>user-name:{state.user.name}</p>
    </div>
  );
}
