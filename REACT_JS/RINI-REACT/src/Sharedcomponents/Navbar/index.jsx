import React from "react";
import "./index.css";

import { BsLinkedin} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import{AiFillHome} from "react-icons/ai";
import { SiHandshake } from "react-icons/si";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiInbox} from "react-icons/hi";
import { GrNotification} from "react-icons/gr";
import { FcBusinesswoman} from "react-icons/fc";
import { HiBuildingOffice} from "react-icons/hi2"


const Navbar = () => {
  return (
    
<div className='Mainwrapper-navbar'>

    <div className='btn'>
    <BsLinkedin size={30}/>
    <p>Linkedin</p>
    </div>

    <div className='text'><FiSearch size={30} />
    <input type="text" placeholder="Search Linkedin"></input>
    <p>Search</p>
    </div>

    <div className='btn'>
    <AiFillHome size={30}/>
    <p>Home</p>
    </div>
                   
    <div className='btn'>
    <SiHandshake size={30}/>
    <p>MyNetwork</p>     
    </div>                

    <div className='btn'>
    <BsBriefcaseFill size={30} s/>
    <p>Jobs</p>
    </div>

    <div className='btn'>
    <HiInbox size={30} />
    <p>Inbox</p>
    </div>

    <div className='btn'>
    <GrNotification size={30}/>
    <p>Notifications</p>
    </div> 

    <div className='btn'>
    <FcBusinesswoman size={30}/>
    <p>Contact</p>
    </div>          
                   
    <div className='btn'>
    <HiBuildingOffice size={30}/>
    <p>Work</p>
    </div>

    <a href="#" className='anchor'>Try Premium For Free</a>

</div>
    )
}

export default Navbar;
