import React, { Component } from 'react';
import { Button } from 'antd-mobile';

/*
  生命周期-新增特性
*/
export default class IndexB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'old',
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(props, state);
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    /*
      作用：获取dom信息，返回给 componentDidUpdate
      返回值 作为 componentDidUpdate 钩子函数的 snapshot参数
    */
    return 'getSnapshotBeforeUpdate callback';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  handleClick = () => {
    this.setState({
      text: 'new',
    });
  };

  render() {
    console.log('render');
    return (
      <div>
        component-new demo
        <h1>{this.state.text}</h1>
        <Button onClick={this.handleClick} type="primary">
          修改
        </Button>
      </div>
    );
  }
}
