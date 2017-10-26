import React, { Component } from 'react';
import './Whistle3.css';
import axios from 'axios';

import { connect } from 'react-redux';

import { getProducts } from '../../ducks/reducer';

class Whistle3 extends Component {
    constructor(){
        super()
      
    }
    
    componentDidMount(){
        this.props.getProducts()
      }

    render() {
        const displayProducts = this.props.products.map((elem, i)=>{
          if (!elem.qty) {
            elem.qty = 1
          } 
            return (
              <div key={elem.id}>
                <h3 className="productName">{elem.name}</h3>
                <h4 className="productDescription">{elem.description}</h4>
                <p className="productPrice">${elem.price}</p>
                <img className="productImg" src={elem.img} alt="" />
                <input type="number" value={elem.qty} min="1" id="qty" 
                onChange={(e)=> {this.props.updateQuantity(e, i)}}/>
                <button className="productBtn" onClick={() => {this.props.storeToCart(elem)}}>Add to cart</button>
              </div>
            )
          })

        return (
            <div>
              {displayProducts}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { getProducts })(Whistle3);