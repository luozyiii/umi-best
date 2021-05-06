import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';

/* 
  组件的生命周期-旧
  PureComponent 组件
  state = { text: 'old'} }
  局限性 PureComponent只是进行浅比较；例如 state = { text: {id: 10} } 这种改变id 还是会触发render方法更新
  更深度理解：可以阅读以下浅比较的源码
*/
export default class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textOld: 'old',
      text: { id: 9 },
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClickOld = () => {
    this.setState({
      textOld: 'new',
    });
  };

  handleClick = () => {
    this.setState({
      text: { id: 10 },
    });
  };

  render() {
    console.log('render');
    return (
      <div>
        pure-component demo
        <h1>{this.state.text.id}</h1>
        <Button onClick={this.handleClick} type="primary">
          修改
        </Button>
        <br />
        <h1>{this.state.textOld}</h1>
        <Button onClick={this.handleClickOld} type="primary">
          旧修改
        </Button>
      </div>
    );
  }
}
