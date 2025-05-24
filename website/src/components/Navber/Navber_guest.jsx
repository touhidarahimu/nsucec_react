import React, { useState } from 'react';
import logo from '../../assets/nsucec logo.png';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const NavbarGuest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [activeButton, setActiveButton] = useState('');

  const menuItems = ['Home', 'Members', 'Events', 'Daily CEC', 'Recruitment'];

  // Handles menu item click
  const handleMenuClick = (item) => {
    setActiveItem(item);
    setActiveButton(''); // Clear button highlight
    setIsOpen(false);
  };

  // Handles Login/Sign Up button click
  const handleButtonClick = (button) => {
    setActiveButton(button);
    setActiveItem(''); // Clear menu highlight
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#001E2E] w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="NSU CEC Logo" className="h-[60px] w-auto" />
          <h1 className="text-xl font-semibold text-[#ddf5ff]">NSUCEC</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-10 text-white font-semibold text-base">
          {menuItems.map(item => (
            <li
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`cursor-pointer py-2 px-3 rounded transition duration-300 ${
                activeItem === item
                  ? 'bg-gradient-to-r from-blue-300 to-sky-900 text-white shadow-md'
                  : 'hover:text-sky-300'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex gap-4">
          <button
            onClick={() => handleButtonClick('login')}
            className={`px-5 py-2 rounded-md font-semibold text-white shadow-md transition bg-gradient-to-r from-blue-300 to-sky-900 ${
              activeButton === 'login' ? ' hover:from-blue-400 ' : ''
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleButtonClick('signup')}
            className={`px-5 py-2 rounded-md font-semibold text-white shadow-md transition bg-gradient-to-r from-blue-300 to-sky-900 ${
              activeButton === 'signup' ? ' hover:from-blue-400 ' : ''
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="xl:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#001E2E] px-6 pb-6 flex flex-col items-center space-y-4 text-white font-medium text-base">
          {/* Menu Items */}
          {menuItems.map(item => (
            <div
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`w-full text-center py-2 rounded-md cursor-pointer transition duration-300 ${
                activeItem === item
                  ? 'bg-gradient-to-r from-blue-300 to-sky-900 text-white shadow-md'
                  : 'hover:bg-blue-800'
              }`}
            >
              {item}
            </div>
          ))}

          {/* Login / Signup Buttons */}
          <div className="w-full flex flex-col space-y-2 pt-4">
            <div
              onClick={() => handleButtonClick('login')}
              className={`w-full text-center py-2 rounded-md cursor-pointer transition duration-300 ${
                activeButton === 'login'
                  ? 'bg-gradient-to-r from-blue-300 to-sky-900 text-white shadow-md'
                  : 'hover:bg-blue-800'
              }`}
            >
              Login
            </div>
            <div
              onClick={() => handleButtonClick('signup')}
              className={`w-full text-center py-2 rounded-md cursor-pointer transition duration-300 ${
                activeButton === 'signup'
                  ? 'bg-gradient-to-r from-blue-300 to-sky-900 text-white shadow-md'
                  : 'hover:bg-blue-800'
              }`}
            >
              Sign Up
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarGuest;
