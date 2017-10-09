import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor(){
        super()

        this.state = {
            cart: []
        }
    }


    componentDidMount(){
        axios.get('/api/cart').then((response)=>{
            console.log('componentDidMountcart',response);
            this.setState({
                cart: response.data
            })
        })
    }


    render() {
        console.log('rendercart',this.state.cart);
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
                {displayCart}
            </div>
        );
    }
}

export default Cart;