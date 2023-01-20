//Components

import FirstComponent from './components/FirstComponent.js';
import TemplateExpression from './components/TemplateExpressions.js';
import Events from './components/Events.js';
import Challenger from './components/Challenger.js';

// Style / CSS
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello-World React</h1>  
        <FirstComponent />
        <TemplateExpression />
        <Events />
        <Challenger />
      </div>
    );
  }
}

export default App;
