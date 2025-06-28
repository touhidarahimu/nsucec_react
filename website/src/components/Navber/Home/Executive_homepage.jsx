import React from 'react'
import EventSlider from '../Slider/Event_slider'
import ExecutiveBodyMembers from '../Executive_members/ExecutiveBody_members'
import NavbarGuest from '../Navber_guest'
import Footer from '../Footer/Footer'
const Executive_homepage = () => {
  return (
    <div>
        <NavbarGuest></NavbarGuest>
        <EventSlider></EventSlider>
        <ExecutiveBodyMembers></ExecutiveBodyMembers>
        <Footer></Footer>
    </div>
  )
}

export default Executive_homepage