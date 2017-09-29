import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor(){
        super()
        this.state = {
            cart: []
        }
    }


    getCart(){
        axios.get('/api/cart').then((response)=>{
            this.setState({
                cart: response.data
            })
        })
    }


    render() {
        const displayCart = this.state.cart.map((elem)=>{
            return (
              <div>
                <h3>{elem.name}</h3>
                <p>${elem.price}</p>
                <br/>
              </div>
            )
          })
        return (
            <div>
                <h2>This is the cart component.</h2>
                <button onClick={()=>{this.getCart()}}>Cart</button>
                {displayCart}
            </div>
        );
    }
}

export default Cart;