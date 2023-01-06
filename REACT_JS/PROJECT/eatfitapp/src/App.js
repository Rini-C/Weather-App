import React from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Order from './components/Order'
import Meals  from './components/Meals'
import Search from './components/Search'
import Whatsapp from'./components/Whatsapp'
import Location  from './components/Location'
import Cart from'./components/Cart'
import Login from'./components/Login'

const App=() =>{
  return (
<> 
     <Navbar/>
        <Routes>

          <Route path="/Order"element={<Order/>}/>
          <Route path="/Meals"element={<Meals/>}/>
          <Route path="/Search"element={<Search/>}/>
          <Route path="/Whatsapp"element={<Whatsapp/>}/>
          <Route path="/Location"element={<Location/>}/>
          <Route path="/Cart"element={<Cart/>}/>
          <Route path="/Login"element={<Login/>}/>
          
        </Routes>
   
     </>
  )
}

export default App;

