import React, { useState } from 'react';
import logo from '../../assets/nsucec logo.png';
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = ['Home', 'Members', 'Events', 'Daily CEC', 'Recruitment'];

  return (
    <nav style={{ backgroundColor: '#001E2E' }}>
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="NSU CEC Logo" className="h-[60px] w-auto" />
          <h1 className="text-xl font-semibold" style={{ color: '#ddf5ff' }}>NSUCEC</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex space-x-10 font-semibold text-white">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveItem(item)}
              className={`cursor-pointer transition-all duration-200 px-2 py-1 rounded ${
                activeItem === item
                  ? 'bg-gradient-to-r from-blue-300 to-sky-900'
                  : 'hover:text-sky-300'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Profile */}
        <div className="hidden xl:flex items-center space-x-1 cursor-pointer hover:text-sky-200">
          <h1 className='font-bold'>Profile</h1>
          <CgProfile className="h-8 w-8 " />
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="xl:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu (only visible when open) */}
      {isOpen && (
        <div className="xl:hidden flex flex-col items-center space-y-4 px-4 pb-4 text-white font-semibold text-base">
          {/* Menu Items */}
          {menuItems.map(item => (
            <div
              key={item}
              onClick={() => setActiveItem(item)}
              className={`w-full text-center py-2 rounded-md cursor-pointer transition duration-300 ${
                activeItem === item ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:from-blue-400'
              }`}
            >
              {item}
            </div>
          ))}

          {/* Profile Item */}
          <div
            onClick={() => setActiveItem('Profile')}
            className={`flex items-center justify-center space-x-2 w-full py-2 rounded-md cursor-pointer transition duration-300 ${
              activeItem === 'Profile' ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:from-blue-400'
            }`}
          >
            <CgProfile className="h-5 w-5" />
            <h1>Profile</h1>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
