import React, { Component } from 'react';
import Card from './Card.js';
import Flickity from 'flickity';

const data = [
  {
    "Team": "Miami Hurricanes",
    "PPG": 69,
    "FGM": 773,
    "FGA": 1695,
    "FG%": 45.6,
    "FTM": 421,
    "FTA": 584,
    "FT%": 72.1,
    "3PTM": 200,
    "3PA": 550,
    "3P%": 36.4,
    "TO": 13,
    "Rebounds": 36
  }
];

class CardSlide extends Component {
    
    componentDidMount() {
        var elem = document.querySelector('.CardSlide');

        var flkty = new Flickity( elem, {
            // options
            wrapAround: true
        });
    }
    
    render () {
        return (
            <div className="CardSlide">
                {data.map(function(team, index) {
                    return <Card 
                        key={index}
                        team={team}
                    />;
                })}
            </div>
        );
    }
}

export default CardSlide;
