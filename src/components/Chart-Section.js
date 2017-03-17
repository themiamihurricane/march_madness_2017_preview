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
        let yourSelect = document.getElementById(selectID);

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
                 <p>Looking at the numbers, this game could be a close one. <a target="_blank" href="https://projects.fivethirtyeight.com/2017-march-madness-predictions/">FiveThirtyEight</a> gives the Canes a 55 percent chance of making it past the Spartans, and the numbers show why the game is so close to a coin flip.</p>

                 <p>The Canes have scored 69 points per game on average this season, while the Spartans shot for 72. Miami has had a better time shooting free throws this season than Michigan State (72.1 vs 66.4 percent), but the Spartans have outdone the Canes in terms of field goals and three-pointers. But even then, those numbers are within one percentage of each other.</p>

                 <p><b>Use the table below to compare the stats between every team in the NCAA Midwest.</b></p>

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
