import React, { Component } from 'react';
import Card from './Card.js';
import Flickity from 'flickity';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CardSlide extends Component {
    
    componentDidMount() {
        let elem = document.querySelector('.CardSlide');
        let flkty;

        flkty = new Flickity( elem, {
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
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="CardSlide">
                {this.renderCards()}
            </div>
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
