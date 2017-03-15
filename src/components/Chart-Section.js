import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class ChartSection extends Component {
    render () {
        return (
            <div className="ChartSection">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Team 1</td>
                            <td>Team 2</td>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Seed</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Points per Game</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Field-Goal %</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Free-Throw %</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Three-Point %</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Turnovers per Game</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Rebounds per Game</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        teamTable: state.TeamTable
    }
}

export default connect(mapStateToProps)(ChartSection);
