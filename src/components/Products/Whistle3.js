import React, { Component } from 'react';
import './Whistle3.css';
import axios from 'axios';

class Whistle3 extends Component {
    constructor(){
        super()
      
        this.state = {
          products: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3030/api/products').then((response)=>{
          response.data
          this.setState({
            products: response.data
          })
        })
      }

      storeToCart(product){
        axios.post('/api/addtocart', product)
    }

    render() {
        const displayProducts = this.state.products.map((elem)=>{
            return (
              <div>
                <button onClick={() => {this.storeToCart(elem)}}>Add to cart</button>
                <h3 className="productName">{elem.name}</h3>
                <h4 className="productDescription">{elem.description}</h4>
                <p className="productPrice">${elem.price}</p>
                <img className="productImg" src={elem.img} alt="" />
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

export default Whistle3;