import React, { Component } from 'react';
import SearchContext from './searchContext';
import Search from './search';
import Lists from './lists';
import Consumer from './consumer';
import { getLists } from '@/services/search';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }

  handleDispatch = async (action) => {
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload,
        });
      case 'LISTS':
        const res = await getLists(action.payload);
        return this.setState({
          lists: res.lists,
        });
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <SearchContext.Provider
          value={{ state: this.state, dispatch: this.handleDispatch }}
        >
          <Search />
          <Lists />
          <Consumer />
        </SearchContext.Provider>
      </div>
    );
  }
}
