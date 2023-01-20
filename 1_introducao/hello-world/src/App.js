import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello-World React</h1>  
        <table id='table'>
            <tr>
                <td>  1  </td>
                <td>  1     </td>
            </tr>
            <tr>
                <td>  2      </td>
                <td>  2     </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default App; 
