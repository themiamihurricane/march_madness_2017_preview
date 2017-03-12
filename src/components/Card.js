import React, { Component } from 'react';

class Card extends Component {
    render () {
        return (
            <div className="Card">
                <div className="cardHeader">
                    <p>{this.props.team["Team"]}</p>
                </div>
                <div className="cardBody"></div>
            </div>
        );
    }
}

export default Card;