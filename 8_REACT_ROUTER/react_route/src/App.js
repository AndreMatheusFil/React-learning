import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
    return (
      <div className="App">
      <h1>React Router</h1>
       <BrowserRouter>
       <Navbar></Navbar>
       <SearchForm/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id/info' element={<Info />}/>
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/company' element={<Navigate to='/about'/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
       </BrowserRouter>
      </div>
    );
}

export default App;
