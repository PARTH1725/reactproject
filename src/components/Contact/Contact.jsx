import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
const Contact = () => {
  debugger
  return (
    <div className='contact'>
      <div className="contact-text">
      <h2>Send us a Message <img src={msg_icon} alt="" /></h2>
      <p>Lorem ipsum dolor sit amet, consectetur velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      </p>
        <ul>
            <li>sarahsmith@example.com</li>
            <li>123-456-7890</li>
            <li>F-10 Sector, Islamabad
                 Islamabad<br/> Capital Territory, 44000
                      Pakistan</li>
        </ul>
        </div>
      <div className="contact-info">
        <form>
            <label>your Name</label>
            <input type="text" name='name' placeholder='Enter your name'
             required />
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder='Enter your phone number'
              required/>
              <label>Write your message</label>
              <textarea  name="message" rows= '6' placeholder='Enter your message' required></textarea>
              <button type='submit'className='btn dark-bton'>Submit Now</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
