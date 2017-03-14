import React, { Component } from 'react';
import Card from './Card.js';
import Flickity from 'flickity';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CardSlide extends Component {
    
    componentDidMount() {
        var elem = document.querySelector('.CardSlide');

        var flkty = new Flickity( elem, {
            // options
            wrapAround: true
        });
    }

    renderCards() {
        return this.props.dataMen.map(function(team, index) {
                    return <Card 
                        key={index}
                        team={team}
                    />;
                })
    }
    
    render () {
        return (
            <div className="CardSlide">
                {this.renderCards()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dataMen: state.dataMen
    }
}

export default connect(mapStateToProps)(CardSlide);
