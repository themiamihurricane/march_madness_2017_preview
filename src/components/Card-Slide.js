import React, { Component } from 'react';
import Card from './Card.js';
import Flickity from 'flickity';

class CardSlide extends Component {
    
    componentDidMount() {
        var elem = document.querySelector('.CardSlide');

        var flkty = new Flickity( elem, {
            // options
            cellAlign: 'left',
            //contain: true,
            wrapAround: true
        });
    }
    
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
