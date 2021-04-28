import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'old text',
    };
  }

  changeText(str) {
    this.setState({
      text: str,
    });
  }

  render() {
    return (
      <div>
        <h2>child test--{this.state.text}</h2>
      </div>
    );
  }
}
