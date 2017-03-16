import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
