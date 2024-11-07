import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/plogo.png'
const Navbar = () => {

  const [sticky, setsticky] = useState(false);
//* this code is for sticky navbar **//
//**this code is created by youtube video **//
useEffect(()=>{
 window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setsticky(true) : setsticky(false);
         })
    },[]);
   //** this code is for sticky navbar **//
   //**this code is created by youtube video **// 
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
