import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {tableSelect} from './../actions/table-select.js';

class ChartSection extends Component {
    setTeam1 (index) {
         this.setState(() => {
            this.props.tableData.team1 = this.props.dataMen[index];
        });
    }

    setTeam2 (index) {
         this.setState(() => {
            this.props.tableData.team2 = this.props.dataMen[index];
        });
    }

    check (selectID) {
        var yourSelect = document.getElementById(selectID);

        if (selectID === "mySelect1") {
            this.setTeam1(yourSelect.selectedIndex);
        } else {
            this.setTeam2(yourSelect.selectedIndex);
        }       
    }

    listOfTeamNames(selectID) {
        //const that = this;
        //this.check.bind(this)
        return (
            <select onClick={() => this.check(selectID)} id={selectID} className="soflow">
                {this.props.dataMen.map(function(team, index) {
                    return (
                        <option 
                            key={index} 
                            data-team={team["Team"]}
                        >
                            {team["Team"]}
                        </option>
                    );  
                })}
            </select>
        );
    }

    

    render () {
        return (
            <div className="ChartSection">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>
                                {this.listOfTeamNames("mySelect1")}
                            </td>
                            <td>
                                {this.listOfTeamNames("mySelect2")}
                            </td>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Seed</td>
                            <td>{this.props.tableData.team1["Seed"]}</td>
                            <td>{this.props.tableData.team2["Seed"]}</td>
                        </tr>
                        <tr>
                            <td>Points per Game</td>
                            <td>{this.props.tableData.team1["PPG"]}</td>
                            <td>{this.props.tableData.team2["PPG"]}</td>
                        </tr>
                        <tr>
                            <td>Field-Goal %</td>
                            <td>{this.props.tableData.team1["FG%"]}</td>
                            <td>{this.props.tableData.team2["FG%"]}</td>
                        </tr>
                        <tr>
                            <td>Free-Throw %</td>
                            <td>{this.props.tableData.team1["FT%"]}</td>
                            <td>{this.props.tableData.team2["FT%"]}</td>
                        </tr>
                        <tr>
                            <td>Three-Point %</td>
                            <td>{this.props.tableData.team1["3P%"]}</td>
                            <td>{this.props.tableData.team2["3P%"]}</td>
                        </tr>
                        <tr>
                            <td>Turnovers per Game</td>
                            <td>{this.props.tableData.team1["TO"]}</td>
                            <td>{this.props.tableData.team2["TO"]}</td>
                        </tr>
                        <tr>
                            <td>Rebounds per Game</td>
                            <td>{this.props.tableData.team1["Rebounds"]}</td>
                            <td>{this.props.tableData.team2["Rebounds"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tableData: state.tableData,
        dataMen: state.dataMen
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({tableSelect: tableSelect}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSection);
