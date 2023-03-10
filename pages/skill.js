import React from 'react'
import Navbar from '../components/Primary/Navbar'
import Footer from '../components/Primary/Footer'
import Heading from '../components/HomePage/Heading'
import SimpleCard from '../components/skiils/SimpleCard'
import LogoProjects from '../components/skiils/LogoProjects'
function skill() {
  return (
    <div>
        <Navbar/>
        <Heading/>
        <SimpleCard/>
        <LogoProjects/>
        <Footer/>
    </div>
  )
}

export default skill