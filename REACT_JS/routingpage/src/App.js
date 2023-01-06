import React from 'react';

import { Route,Routes } from 'react-router-dom';
import{BrowserRouter}from "react-router-dom";
import Color from './Components/Hooks/useState'

import Header from'./Components/Header';
import Home from './Components/Home';
import Profile from './Components/Department';
import Department from './Components/Profile';
function App() {
  return (
    <>
    
  <BrowserRouter>
     <Header/>
     <Color/>
       <Routes>
          
          <Route path='/Home'element={<Home/>}/>
          <Route path='/Department'element={<Department/>}/>
          <Route path='/Profile'element={<Profile/>}/>
        
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App;
