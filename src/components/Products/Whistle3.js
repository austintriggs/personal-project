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

      storeToCart(product){
        console.log('product',product)
        axios.post('/api/addtocart', product)
    }

    render() {
        const displayProducts = this.props.products.map((elem)=>{
            return (
              <div key={elem.id}>
                <h3 className="productName">{elem.name}</h3>
                <h4 className="productDescription">{elem.description}</h4>
                <p className="productPrice">${elem.price}</p>
                <img className="productImg" src={elem.img} alt="" />
                <button className="productBtn" onClick={() => {this.storeToCart(elem)}}>Add to cart</button>
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