import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import logo from '../../../assets/nsucec logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#051C2C] text-white px-6 md:px-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Left Panel */}
        <div>
          <h3 className="font-bold text-lg mb-2">Governing Panels</h3>
          <ul className="space-y-1 text-sm">
            <li>Executive Body</li>
            <li>Sub - Executive Body</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-2">Activities</h3>
          <ul className="space-y-1 text-sm">
            <li>TechFest</li>
            <li>Gamewave</li>
            <li>Cybernauts</li>
            <li>Bit Arena</li>
            <li>Workshops</li>
          </ul>
        </div>

        {/* Middle Panel */}
        <div>
          <h3 className="font-bold text-lg mb-2">Recruitment</h3>

          <h3 className="font-bold text-lg mt-4 mb-2">Wings</h3>
          <ul className="space-y-1 text-sm">
            <li>Programming & Skill Development</li>
            <li>Esports</li>
            <li>Robotics</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-2">Daily CEC</h3>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="font-bold text-xl mb-4">CONTACT US</h3>
          <form className="flex flex-col space-y-3 text-sm">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 bg-[#0E2A3C] text-white rounded placeholder:text-white/80"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 bg-[#0E2A3C] text-white rounded placeholder:text-white/80"
            />
            <textarea
              placeholder="Message"
              className="px-4 py-2 bg-[#0E2A3C] text-white rounded h-24 resize-none placeholder:text-white/80"
            />
            <button
              type="submit"
              className="bg-[#00BFFF] hover:bg-[#00a7dd] transition duration-300 text-white px-6 py-2 rounded font-bold self-start"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Club Info */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="NSUCEC Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-bold">NSUCEC</h2>
            </div>
            <p className="text-sm leading-relaxed">
              <strong>NSUCEC</strong> (North South University Computer & Engineering Club) is the only
              engineering-focused club at NSU, founded in 1997. We empower future engineers
              through innovation, learning, and collaboration.
            </p>
          </div>
          <div className="flex space-x-4 mt-6 ml-6">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-[#00BFFF] transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-[#00BFFF] transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-[#00BFFF] transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl hover:text-[#00BFFF] transition" />
            </a>
          </div>
           <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NSU CSE Club. All rights reserved.
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
