import React, { Component } from 'react';
import Card from './Card.js';

class CardSlide extends Component {
    render () {
        return (
            <div className="CardSlide">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>
        );
    }
}

export default CardSlide;
