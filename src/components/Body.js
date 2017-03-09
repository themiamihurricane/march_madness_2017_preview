import React, { Component } from 'react';
import BodyText from './Body-Text.js';
import CardSlide from './Card-Slide.js';

class Body extends Component {
    render () {
        return (
            <div className="Body">
                <BodyText />
                <CardSlide />
            </div>
        );
    }
}

export default Body;