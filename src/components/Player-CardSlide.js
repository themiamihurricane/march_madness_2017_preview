import React, { Component } from 'react';
import PlayerCard from './Player-Card.js';
import Flickity from 'flickity';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class PlayerCardSlide extends Component {
    
    componentDidMount() {
        let elem = document.querySelector('.PlayerCardSlide');
        let flkty;

        flkty = new Flickity( elem, {
            // options
            wrapAround: true
        });
    }

    renderCards() {
        return this.props.men.map(function(player, index) {
                    return <PlayerCard 
                        key={index}
                        team={player}
                    />;
                })
    }
    
    render () {
        return (
            <div className="PlayerCardSlide">
                {this.renderCards()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        men: state.men
    }
}

export default connect(mapStateToProps)(PlayerCardSlide);
