import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartBtn extends Component {
    render() {
        return (
            <div>
                <Link to ="/cart"><img src={require("../../assets/cart-large-green.png")} /></Link>
            </div>
        );
    }
}

export default CartBtn;