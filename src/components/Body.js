import React, { Component } from 'react';
import BodyText from './Body-Text.js';
import CardSlide from './Card-Slide.js';
import ChartSection from './Chart-Section.js';

class Body extends Component {
    render () {
        return (
            <div className="Body">
                <BodyText />
                <CardSlide />
                <ChartSection />
            </div>
        );
    }
}

export default Body;