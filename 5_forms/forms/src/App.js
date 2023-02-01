import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>forms</h2>
        <MyForm user={{name: "André", email: "andrematheusfil@gmail.com"}}/>
      </div>
    );
  }
}

export default App;
