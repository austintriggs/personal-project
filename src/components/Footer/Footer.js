import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                {/* This is the footer. */}
                <div class="top-row">
                    <div class="social">
                        <img className="facebook" src={require(`../../assets/asset 41.png`)} />
                        <img className="instagram" src={require(`../../assets/asset 42.png`)} />
                        <img className="twitter" src={require(`../../assets/asset 43.png`)} />
                        <img className="pinterest" src={require(`../../assets/asset 44.png`)} />
                    </div>
                </div>
                <div class="bottom-row">
                    <ul class="links">
                        <li>Company</li>
                        <li>Careers</li>
                        <li>Log In</li>
                        <li>Whistle Reviews</li>
                        <li>Blog</li>
                        <li>FAQs</li>
                        <li>News</li>
                        <li>Press</li>
                        <li>Affiliates</li>
                        <li>Legal</li>
                        <li>Get Free Service</li>
                        <br />
                        <li>© 2017 Whistle Labs, Inc</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;