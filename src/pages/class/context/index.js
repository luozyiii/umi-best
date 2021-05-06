import React, { Component } from 'react';
import SearchContext from './searchContext';
import Search from './search';
import Lists from './lists';
import Consumer from './consumer';
import { getLists } from '@/services/search';
import LazyLoad from '@/components/LazyLoad';

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
    let info = { a: 1 };
    return (
      <div>
        {info?.b?.c}
        {/* 以下是触发组件错误的代码,检验错误边界组件:引用不存在的变量 */}
        {/* {info.b.c} */}
        <SearchContext.Provider
          value={{ state: this.state, dispatch: this.handleDispatch }}
        >
          <Search />
          {/* <Lists /> */}
          {/* 封装后懒加载组件的使用 */}
          <LazyLoad component={import('./lists')} />
          <Consumer />
        </SearchContext.Provider>
      </div>
    );
  }
}
