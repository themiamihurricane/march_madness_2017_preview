import {combineReducers} from 'redux';
import MenTeamReducer from './reducer-teams-men.js';
import TeamTable from './reducer-table-team.js';

const allReducers = combineReducers({
    dataMen: MenTeamReducer,
    tableData: TeamTable
});

export default allReducers;