import React from 'react'
import './About.css'
import parlor_1 from '../../assets/parlor-1.jpg'
import parlor_2 from '../../assets/parlor-2.jpg'
import parlor_3 from '../../assets/parlor-3.jpg'
import parlor_4 from '../../assets/parlor-4.jpg'
import parlor_5 from '../../assets/parlor-5.png'
import parlor_6 from '../../assets/parlor-6.png'

const About = () => {
  debugger
  return (
    <div className='About'>
        <div className='parlor'>
          <img src={parlor_1} alt="" />
          <img src={parlor_2} alt="" />
          <img src={parlor_3} alt="" />
          <img src={parlor_4} alt="" />
          <img src={parlor_5} alt="" />
          <img src={parlor_6} alt="" />
        </div>
       
    </div>
  )
}

export default About
