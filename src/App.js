import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import axios from 'axios';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import FAQ from './components/FAQ/FAQ';
import Support from './components/Support/Support';
import Whistle3 from './components/Products/Whistle3';
import LearnMore from './components/Products/LearnMore';

class App extends Component {
  constructor(){
    super()

    this.state = {
        cart: []
    }
    // this.removeFromCart = this.removeFromCart.bind(this)
    this.storeToCart = this.storeToCart.bind(this);
    this.getCart = this.getCart.bind(this);    
    this.updateQuantity = this.updateQuantity.bind(this);    
}

  componentDidMount(){
    this.getCart()
  }

  storeToCart(product){
    axios.post('/api/addtocart', product).then(()=>{
      this.getCart()
    })
}

  getCart(){
    axios.get('/api/cart').then((response)=>{
      this.setState({
          cart: response.data
      })
  })
  }

  updateQuantity(e, i){
    console.log('before updateQuantity', this.state.cart)
    var copy = this.state.cart.slice()
    console.log(copy);
    copy[i].qty = e.target.value
    this.setState({
      cart: copy
    })
    console.log('after updateQuantity', this.state.cart)
  }

  render() {
    return (
      <div className="App">
        <Nav cart={this.state.cart} />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={FAQ} path="/faq" />
          <Route component={Support} path="/support" />
          <Route render={() => <Whistle3 storeToCart={this.storeToCart} updateQuantity={this.updateQuantity}/>} path="/products/whistle3" />
          <Route component={LearnMore} path="/how-whistle-3-works" />
          <Route render={() => <Cart cart={this.state.cart} getCart={this.getCart} />} path="/cart" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
