import React, { Component } from 'react';
import Header from './Header';
import Background from './Background';
import CardGrid from './CardGrid';
import store from './store';
import Campaign from './Campaign';
import LoginModal from './LoginModal';


class Layout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginModal: false
    }
  }

  switchLoginModal = () => {
    this.setState({
      ...this.state,
      loginModal: !this.state.loginModal
    })
    console.log('siema');
  }

  render() {
    return (
      <div>
        <Background>
          <Header switchLoginModal={this.switchLoginModal} />
          <Campaign store={store} />
          <CardGrid store={store} />
          <LoginModal
            isOn={this.state.loginModal}
            switchLoginModal={this.switchLoginModal}
          />
        </Background>
      </div>
    );
  }
}

export default Layout;