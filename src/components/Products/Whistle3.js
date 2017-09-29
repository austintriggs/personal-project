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

    render() {
        const displayProducts = this.state.products.map((elem)=>{
            return (
              <div>
                <h3 className="productName">{elem.name}</h3>
                <p className="productPrice">${elem.price}</p>
                <img className="productImg" src={elem.img} alt="" />
              </div>
            )
          })

        return (
            <div>
                    {displayProducts}
                <h1>
                    I am the Whistle 3 component
                </h1>
            </div>
        );
    }
}

export default Whistle3;