import React, { Component } from 'react';
import { Button } from 'antd-mobile';

/* 
  组件的生命周期-旧
  shouldComponentUpdate 另一种实现方式 PureComponent 组件
  参考 pure-component.js
*/
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'old',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate');
    console.log(props, state);
    if (state.text === 'new' && this.state.text !== state.text) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
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
        component-old demo
        <h1>{this.state.text}</h1>
        <Button onClick={this.handleClick} type="primary">
          修改
        </Button>
      </div>
    );
  }
}
