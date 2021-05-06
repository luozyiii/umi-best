import React, { Component, lazy, Suspense } from 'react';
// import Demo from './demo'  // 旧的引入方式
// 按需加载的引入方式
const Demo = lazy(() => import('./demo'));

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      falg: false,
    };
  }

  componentDidMount() {
    // 特意加了定时器，观察延迟加载效果，还可以通过观察js的加载
    setTimeout(() => {
      this.setState({
        falg: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.falg ? (
          <Suspense fallback={<div>loading</div>}>
            <Demo />
          </Suspense>
        ) : null}
      </div>
    );
  }
}
