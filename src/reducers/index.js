import {combineReducers} from 'redux';
import MenTeamReducer from './reducer-teams-men.js';

const allReducers = combineReducers({
    dataMen: MenTeamReducer
});

export default allReducers;