import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CounterContextProvider } from './context/CounterContext';
import { TitleColorContextProvider } from './context/TitleColorContext';
import './index.css';

ReactDOM.render(
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>,
  document.getElementById('root')
);
