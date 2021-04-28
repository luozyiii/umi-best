import { List } from 'antd-mobile';
import { Link } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>主页</h1>
      <List>
        <List.Item>
          <Link to="/class">React 核心及自定义组件开发</Link>
        </List.Item>
        <List.Item>
          <Link to="/function">React Hooks开发及自定义hook</Link>
        </List.Item>
      </List>
    </div>
  );
}
