import {combineReducers} from 'redux';
import MenTeamReducer from './reducer-teams-men.js';

const allReducers = combineReducers({
    menTeam: MenTeamReducer
});

export default allReducers;