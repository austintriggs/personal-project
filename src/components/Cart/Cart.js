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
                <button onClick={
                    (e)=>this.state.cart.indexOf(e)
                    }> Remove </button>
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