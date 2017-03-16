import {combineReducers} from 'redux';
import MenTeamReducer from './reducer-teams-men.js';
import TeamTable from './reducer-table-team.js';
import MenReducer from './reducer-men.js';

const allReducers = combineReducers({
    dataMen: MenTeamReducer,
    tableData: TeamTable,
    men: MenReducer
});

export default allReducers;