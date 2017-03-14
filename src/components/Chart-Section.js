import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class ChartSection extends Component {
    render () {
        return (
            <div className="ChartSection">
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Miami</td>
                            <td>Other</td>
                        </tr>                        
                    </thead>
                    <tbody>
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
    return {
        dataMen: state.dataMen
    }
}

export default connect(mapStateToProps)(ChartSection);
