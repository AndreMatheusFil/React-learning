
import React from 'react';
import './App.css';
import MyComponent from './Components/MyComponent';
import Title from './Components/Title';

function App()  {
    return (
      <div className="App">
        <h1> titulo do app </h1>
        <MyComponent />
        <p>Teste  de vazamento de css do componente filho </p>
         <Title />
      </div>
    );
  }


export default App;
