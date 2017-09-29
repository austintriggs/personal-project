import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        { router }
        <Footer />
      </div>
    );
  }
}

export default App;
