import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
