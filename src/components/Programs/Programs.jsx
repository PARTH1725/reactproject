import React from 'react';
import './Programs.css';
import service_1 from  '../../assets/service-1.jpg'
import service_2 from  '../../assets/service-2.png'
import certifcate_12 from  '../../assets/certifcate-12.jpg'
import service_icon1 from '../../assets/service-icon1.png'
import fa_icon2 from '../../assets/fa-icon2.png' 
import certificat_icon3 from '../../assets/certificat-icon3.png'
const Programs = () => {
  return (
    <div className='services'>
       <div className="service">      
        <img src= {service_1} alt='' />
        <div className="subtitle">
          <img src={service_icon1} alt=""  />
          <p>Lorem ipsum dolor  </p>
        </div>
    </div>

    <div className="service">      
        <img src= {service_2} alt='' />
        <div className="subtitle">
          <img src={fa_icon2} alt=""  />
          <p>Lorem ipsum dolor  </p>
        </div>
    </div>

    <div className="service">      
        <img src= {certifcate_12} alt='' />
        <div className="subtitle">
          <img src={certificat_icon3} alt=""  />
          <p>Lorem ipsum dolor  </p>
        </div>
    </div>
    </div>

  )
}
export default Programs
