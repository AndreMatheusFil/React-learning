
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
    return (
      <div className="App">
        <h1>Context API</h1>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="About" element={<About />}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    );
}

export default App;
