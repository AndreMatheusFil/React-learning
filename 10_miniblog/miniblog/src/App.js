import React from 'react';
import './App.css';

//Funções
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState,useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Contexto
import { AuthProvider } from './context/AuthContext';

//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashbord from './pages/Dashbord/Dashbord';




function App() {
  const [user,setUser] = useState(undefined);
  const{auth} = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user);
    })
  },[auth])

  if (loadingUser){
    return <p>Carregando....</p>
  }
    return (
      <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <Navbar/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Login' element={!user ? <Login />: <Navigate to='/'/>}/>
              <Route path='/Register' element={!user ? <Register /> : <Navigate to='/'/>}/>
              <Route path='/Post/Create' element={user ? <CreatePost/> : <Navigate to='/login'/>}/>
              <Route path='/Dashbord' element={user ? <Dashbord/> : <Navigate to='/login'/>}/>
            </Routes>
          </div>
        <Footer />
        </BrowserRouter>
      </AuthProvider>
      </div>
    );
}

export default App;
