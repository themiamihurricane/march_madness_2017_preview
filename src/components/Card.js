import React, { Component } from 'react';

class Card extends Component {
    render () {
        return (
            <div className="Card">
                <div className="cardHeader">
                    <h2 className="teamName">{this.props.team["Team"]}</h2>
                </div>
                <div className="cardBody">
                    <div className="dataRow">
                        <div className="dataBox">
                            <div className="dataLabel">Points Per Game</div>
                            <div className="dataPoint">69</div>
                        </div>
                        <div className="dataBox">
                            <div className="dataLabel">Field-Goal %</div>
                            <div className="dataPoint">45.6</div>
                        </div>
                    </div>
                    <div className="dataRow">
                        <div className="dataBox">
                            <div className="dataLabel">Free-Throw %</div>
                            <div className="dataPoint">72.1</div>
                        </div>
                        <div className="dataBox">
                            <div className="dataLabel">Three-Point %</div>
                            <div className="dataPoint">36.4</div>
                        </div>
                    </div>
                    <div className="dataRow">
                        <div className="dataBox">
                            <div className="dataLabel">Turnovers per Game</div>
                            <div className="dataPoint">13</div>
                        </div>
                        <div className="dataBox">
                            <div className="dataLabel">Rebounds per Game</div>
                            <div className="dataPoint">36</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;