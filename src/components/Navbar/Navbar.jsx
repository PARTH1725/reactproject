import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/plogo.png'
const Navbar = () => {

  const [sticky, setsticky] = useState(false);

useEffect(()=>{
 window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setsticky(true) : setsticky(false);
         })
    },[]);
  return (
    <nav className={`container ${sticky ? 'dark-navb' : ''}`}>
      
       <img src= {logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Services</li>
            <li>About us</li>
            <li><button className='btn'>Book now</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
