import React from 'react'
import './hero.css'
import icon1 from '../../assets/icon1.png'
const hero = () => { 
 
  return (
    <div className='hero container'>
      <div className="hero-text">

      <h1>Beauty isn't just skin deep; it's a feeling</h1>
       <p> Lorem ipsum dolor sit amet, consectetuer
           adipiscing elit. Aenean et magnis dis 
           parturient montes, nascetur ridiculus mus. Donec </p>
            <button className='btn'>Explore more <img src={icon1} alt="" /></button>
            
      </div>
    </div>
  )
}

export default hero
