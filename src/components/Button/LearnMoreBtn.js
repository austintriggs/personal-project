import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LearnMoreBtn extends Component {
    render() {
        return (
            <div>
                <Link to ="/how-whistle-3-works"><button> Learn More </button></Link>
            </div>
        );
    }
}

export default LearnMoreBtn;