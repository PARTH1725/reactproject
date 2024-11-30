import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  debugger
  return (
    <div>
       
       <Navbar />
       <Hero />
       <div className="container">
        <Title subtitle='WHAT IS OUR SPECIAL' title='WE GIVE YOU SERVICE IN AFFORDABLE PRICE'/>
         <Programs />
         <Title subtitle='Our Speciality' title='THE SERVICE WE GIVE YOU AND WE ARE SPECIAL IN IT'/>
         <About />
         <Title subtitle= 'Send us Message' title='Send us Message whenever You Want'/>
         <Contact />
         <Footer/>
        </div>
    </div>
  )
}

export default App
