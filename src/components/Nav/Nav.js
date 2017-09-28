import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import BuyNowBtn from '../Button/BuyNowBtn';
import LearnMoreBtn from '../Button/LearnMoreBtn';

class Nav extends Component {
    render() {
        return (
            <div className="Nav_header">
                <h4>
                    <Link to="/faq">FAQs</Link>
                    <Link to ="/support">Support</Link>
                    <BuyNowBtn />
                    <LearnMoreBtn />
                </h4>
            </div>
        );
    }
}

export default Nav;