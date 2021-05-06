import React, { useState, useEffect } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi';
import styles from './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <h2 className={styles.title}>React Hooks开发及自定义hook</h2>
      <List>
        <List.Item>
          <Link to="/function/hook">hook</Link>
        </List.Item>
        <List.Item>
          <Link to="/function/context">context</Link>
        </List.Item>
      </List>
    </div>
  );
}
