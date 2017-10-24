import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor(){
        super()

        this.state = {
            cart: []
        }
        this.removeFromCart = this.removeFromCart.bind(this)        
    }


    componentDidMount(){
        axios.get('/api/cart').then((response)=>{
            this.setState({
                cart: response.data
            })
        })
    }
    
    removeFromCart(id){
        axios.delete(`/api/cart/${id}`).then((response=>{
            this.setState({
                cart: response.data
            })
        }))
    }


    render() {
        const displayCart = this.state.cart.map((elem)=>{
            return (
              <div>
                <h3>{elem.name}</h3>
                <p>${elem.price}</p>
                <button onClick={() => this.removeFromCart(elem.id)}> Remove </button>
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