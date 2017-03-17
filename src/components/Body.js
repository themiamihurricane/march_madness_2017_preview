import React, { Component } from 'react';
import BodyText from './Body-Text.js';
import CardSlide from './Card-Slide.js';
import ChartSection from './Chart-Section.js';
import PlayerCardSlide from './Player-CardSlide.js';

class Body extends Component {
    render () {
        return (
            <div className="Body">
                <BodyText />
                <PlayerCardSlide />
                <ChartSection />
                <CardSlide />
            </div>
        );
    }
}

export default Body;