import React, { Component } from 'react';
import Header from './Header';
import Background from './Background';
import CardGrid from './CardGrid';

class Layout extends Component {
  render() {
    return (
      <div>
        <Background>
            <Header />
            <CardGrid />
        </Background>
      </div>
    );
  }
}

export default Layout;