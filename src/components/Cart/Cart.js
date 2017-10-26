import React, { Component } from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor(){
        super()

        this.removeFromCart = this.removeFromCart.bind(this)        
    }


    componentDidMount(){
        
    }
    
    removeFromCart(id){
        axios.delete(`/api/cart/${id}`).then((response=>{
            this.setState({
                cart: response.data
            },this.props.getCart)
        }))
    }


    render() {
        const displayCart = this.props.cart.map((elem,i)=>{
            return (
              <div key={i}>
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