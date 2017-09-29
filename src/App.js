import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import router from './router';
import Cart from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        { router }
        <Cart />
        <Footer />
      </div>
    );
  }
}

export default App;
