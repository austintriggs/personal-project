import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {/* This is the footer. */}
                <div className="top-row">
                    <div className="social">
                        <img className="facebook" src={require(`../../assets/asset 41.png`)} alt="" />
                        <img className="instagram" src={require(`../../assets/asset 42.png`)} alt="" />
                        <img className="twitter" src={require(`../../assets/asset 43.png`)} alt="" />
                        <img className="pinterest" src={require(`../../assets/asset 44.png`)} alt="" />
                    </div>
                </div>
                <div className="bottom-row">
                    <ul className="links">
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