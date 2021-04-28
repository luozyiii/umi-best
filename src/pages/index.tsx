import { List } from 'antd-mobile';
import { Link } from 'umi';
// import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1>component demo</h1>
      <List>
        <List.Item>
          <Link to="/class/component-old">component-old</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/component-new">component-new</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/pure-component">pure-component</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/lists">组件通信</Link>
        </List.Item>
        <List.Item>
          <Link to="/class/dva">dva</Link>
        </List.Item>
      </List>
    </div>
  );
}
