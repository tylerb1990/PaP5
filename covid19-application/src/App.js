// IMPORTS
import './App.css';
import React, { Component } from 'react';
import Routes from './components/Routes';
import { HashRouter as Router } from 'react-router-dom';


// APP COMPONENT
class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Router>
          <Routes />
        </Router>
  
      </div>
    );
  }
}
export default App;