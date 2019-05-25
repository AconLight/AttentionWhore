import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Layout from './Layout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Layout}/>
      </BrowserRouter>
    );
  }
};

export default App;
