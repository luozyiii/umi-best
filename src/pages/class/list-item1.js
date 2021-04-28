import React, { Component } from 'react';

export default class ListItem1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.handleItem('item1');
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1--{this.props.name}</h1>
      </div>
    );
  }
}
