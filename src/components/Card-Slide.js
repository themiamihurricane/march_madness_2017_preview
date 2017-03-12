import React, { Component } from 'react';
import Card from './Card.js';
import Flickity from 'flickity';

const data = [
  {
    "Team": "Miami Hurricanes",
    "PPG": 69,
    "FGM": 773,
    "FGA": 1695,
    "FG%": 0.456,
    "FTM": 421,
    "FTA": 584,
    "FT%": 0.721,
    "3PTM": 200,
    "3PA": 550,
    "3P%": 0.364,
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
                    console.log(team);
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
