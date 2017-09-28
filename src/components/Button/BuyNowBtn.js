import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BuyNowBtn extends Component {
    render() {
        return (
            <div>
                <Link to ="/products/whistle3"><button> Buy Now </button></Link>
            </div>
        );
    }
}

export default BuyNowBtn;