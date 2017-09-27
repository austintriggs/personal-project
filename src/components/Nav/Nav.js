import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="Nav_header">
                <h4>
                    <Link to="/faq">FAQs</Link>
                    <Link to ="/support">Support</Link>
                    <Link to ="/products/whistle3"><button> Buy Now </button></Link>
                    <Link to ="/how-whistle-3-works"><button>Learn More</button></Link>
                </h4>
            </div>
        );
    }
}

export default Nav;