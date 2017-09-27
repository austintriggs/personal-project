import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        { router }
        <Footer />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
