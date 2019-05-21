import React, { Component } from 'react';
import Header from './Header';
import Background from './Background';
import CardGrid from './CardGrid';
import store from './store';

class Layout extends Component {
  render() {
    return (
      <div>
        <Background>
            <Header />
            <CardGrid store={store} />
        </Background>
      </div>
    );
  }
}

export default Layout;