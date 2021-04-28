import React, { Component, createRef } from 'react';
import { Button } from 'antd-mobile';
import Child from './child';
import InputForward from './forward';

export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.domRef = createRef();
    this.childRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.domRef);
    console.log(this.domRef.current.innerHTML);
    console.log(this.childRef.current); // 子组件的实例

    this.inputRef.current.focus(); // 加载完成后自动聚焦
  }

  handleChild(str) {
    this.childRef.current.changeText(str);
  }

  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef} />
        <Button type="primary" onClick={() => this.handleChild('new text')}>
          修改child的值
        </Button>
        <InputForward ref={this.inputRef} />
      </div>
    );
  }
}
