import React from 'react'
import NavbarGuest from '../Navber_guest'
import Hero from '../Herosection/Hero'
import Event from '../Event/Event'
import ExecutiveBodyMembers from '../Executive_members/ExecutiveBody_members'

const User_homepage = () => {
  return (
   
    <div>
        <NavbarGuest></NavbarGuest>
        <Hero></Hero>
       <Event></Event>
        <ExecutiveBodyMembers></ExecutiveBodyMembers>
    </div>
    
  )
}

export default User_homepage