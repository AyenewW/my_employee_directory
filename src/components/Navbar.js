import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        Ayenew
      </div>
      <ul className='navbar-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ employee'>Employee</Link></li>
        <li><Link to='/ add employee'>Add Employee</Link></li>
      </ul>
    </div>
  )
}
export default Navbar;