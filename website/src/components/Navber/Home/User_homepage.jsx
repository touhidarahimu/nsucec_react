import React from 'react'
import NavbarGuest from '../Navber_guest'
import Hero from '../Herosection/Hero'
import Event from '../Event/Event'
import ExecutiveBodyMembers from '../Executive_members/ExecutiveBody_members'
import Footer from '../Footer/Footer'
import About from'../About/About'
import FacultyAdvisor from '../Faculty/Faculty_Adviser'
const User_homepage = () => {
  return (
   
    <div>
        <NavbarGuest></NavbarGuest>
        <Hero></Hero>
       <Event></Event>
        {/* <ExecutiveBodyMembers></ExecutiveBodyMembers> */}
        <About></About>
        <FacultyAdvisor></FacultyAdvisor>
        <Footer></Footer>
    </div>
    
  )
}

export default User_homepage