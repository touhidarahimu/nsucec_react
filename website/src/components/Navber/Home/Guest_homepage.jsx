import React from 'react'
import NavbarGuest from '../Navber_guest'
import Hero from '../Herosection/Hero'
import ExecutiveBodyMembers from '../Executive_members/ExecutiveBody_members'
import Event from '../Event/Event'
import Footer from '../Footer/Footer'

const Guest_homepage = () => {
  return (
    <div>
        <NavbarGuest></NavbarGuest>
        <Hero></Hero>
       <Event></Event>
        <ExecutiveBodyMembers></ExecutiveBodyMembers>
        <Footer></Footer>
        //ej
    </div>
  )
}

export default Guest_homepage;