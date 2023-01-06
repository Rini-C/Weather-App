import React from 'react';

import "./Styles/Navbar.scss"


import { IoLogoWhatsapp} from "react-icons/io";
import { MdLocationPin} from "react-icons/md";
import { GiPaperBagOpen } from "react-icons/gi";
import {BsPerson} from "react-icons/bs";
import { Link } from 'react-router-dom';


const Navbar = () =>{ 

  return (

  <div className='Navbar'>

   
    <img src="https://etimg.etb2bimg.com/photo/79836447.cms" width="100px"></img>
    
    

    <div className='Navbar__middle'>
    
    <div>
    <Link to='/Order'>Order</Link> 
    </div>
      
    <div >
    <Link to='/Meal plan'>Meal Plan</Link> 
    </div>

    <div >
    <Link to='/Search'>Search</Link> 
    </div>
   
  </div> 


  <div className='Navbar__right'>
    <div className='Navbar__right-btn1'>
    <Link to='/Whatsapp'><IoLogoWhatsapp color='Green' size={30}/></Link>
    </div> 

    <div className='btn2'>
    <Link to='/Location'><MdLocationPin color='Blue' size={30}/></Link>
    </div>

    <div className='btn3'>
    <Link to='/Cart'><GiPaperBagOpen color='Red' size={30}/></Link> 
    </div>

    <div className='btn4'>
    <Link to='/Login'><BsPerson color='Black' size={30}/></Link>
    </div>   
   </div>
  


</div>

)   
  }   
    
  export default  Navbar;
  