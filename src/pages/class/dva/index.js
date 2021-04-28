import React, { Component } from 'react';
import Search from './search';
import Lists from './lists';
import { connect } from 'dva';

class Dav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Search {...this.props} />
        <Lists {...this.props} />
      </div>
    );
  }
}
export default connect(({ search }) => ({
  search,
}))(Dav);
