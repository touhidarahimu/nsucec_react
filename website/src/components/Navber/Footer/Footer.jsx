import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d1b27] text-white py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Club Logo/Name */}
        <div>
          <h1 className="text-xl font-bold mb-3">NSU CSE Club</h1>
          <p className="text-sm text-gray-400">
            Creating Tech Leaders of Tomorrow. <br />
            Innovate. Inspire. Empower.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/event" className="hover:text-white">Events</a></li>
            <li><a href="/executive" className="hover:text-white">Executive Team</a></li>
            <li><a href="/hero" className="hover:text-white">Hero Section</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#57a3e8]" />
              <a href="mailto:nsuclub@example.com" className="hover:text-white">nsuclub@example.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#57a3e8]" />
              +880 1234-567890
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl text-[#57a3e8]">
            <a href="https://facebook.com/nsucec" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebookF className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/company/nsucec" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedinIn className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NSU CSE Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
