import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/nsucec logo.png';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';

const NavbarGuest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setActiveItem(item);
    setDropdownOpen(false);
    setIsOpen(false);

    switch (item) {
      case 'Home':
        navigate('/');
        break;
      case 'Executive Body':
        navigate('/executive-body');
        break;
      case 'Sub - Executive Body':
        navigate('/sub-executive-body');
        break;
      case 'Activities':
        navigate('/activities');
        break;
      case 'Daily CEC':
        navigate('/daily-cec');
        break;
      case 'Wings':
        navigate('/wings');
        break;
      case 'Recruitment':
        navigate('/recruitment');
        break;
      default:
        break;
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#001E2E] w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="NSU CEC Logo" className="h-[60px] w-auto" />
          <h1 className="text-xl font-semibold text-[#ddf5ff]">NSUCEC</h1>
        </a>

        <ul className="hidden xl:flex items-center gap-10 text-white font-semibold text-base relative">
          <li
  onClick={() => handleMenuClick('Home')}
  className="cursor-pointer py-2 px-3 rounded transition duration-300 hover:text-sky-300"
>
  Home
</li>

          <li className="relative">
            <div
              onClick={handleDropdownToggle}
              className={`cursor-pointer flex items-center gap-1 py-2 px-3 rounded transition duration-300 ${
                activeItem === 'Executive Body' || activeItem === 'Sub - Executive Body'
                  ? 'bg-gradient-to-r from-blue-300 to-sky-900 shadow-md'
                  : 'hover:text-sky-300'
              }`}
            >
              Governing Panels <FaChevronDown size={12} />
            </div>

            {dropdownOpen && (
              <ul className="absolute top-12 bg-[#002B3A] shadow-md rounded-md w-48 z-50">
                <li
                  onClick={() => handleMenuClick('Executive Body')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-300 to-sky-900 hover:from-blue-400 cursor-pointer"
                >
                  Executive Body
                </li>
                <li
                  onClick={() => handleMenuClick('Sub - Executive Body')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-300 to-sky-900 hover:from-blue-400 cursor-pointer"
                >
                  Sub - Executive Body
                </li>
              </ul>
            )}
          </li>

          <li onClick={() => handleMenuClick('Activities')} className={`cursor-pointer py-2 px-3 rounded transition duration-300 ${activeItem === 'Activities' ? 'bg-gradient-to-r from-blue-300 to-sky-900 shadow-md' : 'hover:text-sky-300'}`}>Activities</li>
          <li onClick={() => handleMenuClick('Wings')} className={`cursor-pointer py-2 px-3 rounded transition duration-300 ${activeItem === 'Wings' ? 'bg-gradient-to-r from-blue-300 to-sky-900 shadow-md' : 'hover:text-sky-300'}`}>Wings</li>
          <li onClick={() => handleMenuClick('Daily CEC')} className={`cursor-pointer py-2 px-3 rounded transition duration-300 ${activeItem === 'Daily CEC' ? 'bg-gradient-to-r from-blue-300 to-sky-900 shadow-md' : 'hover:text-sky-300'}`}>Daily CEC</li>
          <li onClick={() => handleMenuClick('Recruitment')} className={`cursor-pointer py-2 px-3 rounded transition duration-300 ${activeItem === 'Recruitment' ? 'bg-gradient-to-r from-blue-300 to-sky-900 shadow-md' : 'hover:text-sky-300'}`}>Recruitment</li>
        </ul>

        <div
          className="xl:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-[#001E2E] px-6 pb-6 flex flex-col items-center space-y-4 text-white font-medium text-base">
          <div onClick={() => handleMenuClick('Home')} className={`w-full text-center py-2 rounded-md cursor-pointer ${activeItem === 'Home' ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:bg-blue-800'}`}>Home</div>

          <div className="w-full text-center">
            <div onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full py-2 rounded-md cursor-pointer bg-[#002B3A] hover:bg-blue-800 flex justify-center items-center gap-2">
              Governing Panels <FaChevronDown size={12} />
            </div>
            {dropdownOpen && (
              <div className="flex flex-col mt-2 space-y-2">
                <div onClick={() => handleMenuClick('Executive Body')} className="py-2 px-4 rounded bg-gradient-to-r from-blue-300 to-sky-900 hover:from-blue-400 cursor-pointer">Executive Body</div>
                <div onClick={() => handleMenuClick('Sub - Executive Body')} className="py-2 px-4 rounded bg-gradient-to-r from-blue-300 to-sky-900 hover:from-blue-400 cursor-pointer">Sub - Executive Body</div>
              </div>
            )}
          </div>

          <div onClick={() => handleMenuClick('Activities')} className={`w-full text-center py-2 rounded-md cursor-pointer ${activeItem === 'Activities' ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:bg-blue-800'}`}>Activities</div>
          <div onClick={() => handleMenuClick('Wings')} className={`w-full text-center py-2 rounded-md cursor-pointer ${activeItem === 'Wings' ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:bg-blue-800'}`}>Wings</div>
          <div onClick={() => handleMenuClick('Daily CEC')} className={`w-full text-center py-2 rounded-md cursor-pointer ${activeItem === 'Daily CEC' ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:bg-blue-800'}`}>Daily CEC</div>
          <div onClick={() => handleMenuClick('Recruitment')} className={`w-full text-center py-2 rounded-md cursor-pointer ${activeItem === 'Recruitment' ? 'bg-gradient-to-r from-blue-300 to-sky-900' : 'hover:bg-blue-800'}`}>Recruitment</div>
        </div>
      )}
    </nav>
  );
};

export default NavbarGuest;
