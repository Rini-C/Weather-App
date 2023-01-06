import React,{useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  const [color, setColor] = useState("header");

  return (
    <>
      <div className={color}>
        <button type='button'
        onClick={() => setColor("header3")}>Click</button>
       
        <h2>Welcome To Component.....</h2>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Department">Department</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
        </ul>

      </div>
    </>
  )
}
export default Header;
