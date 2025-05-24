import React from "react";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

import President from "../../../assets/Muhammad Atik Akbar.png";
import General_Secretary from "../../../assets/Nasib Talukder.png";
import Vice_President from "../../../assets/MD Shefatullah Bin Sadik.png";
import Treasurer from "../../../assets/Ishtiaque Ahmed.png";
import Joint_Secretary from "../../../assets/Arafatul Hasan Sadoy.png";

const executiveMembersRow1 = [
  {
    title: "President",
    name: "Muhammad Atik Akbar",
    img: President,
    email: "atik@example.com",
    facebook: "https://facebook.com/atik.akbar",
    linkedin: "https://linkedin.com/in/atik-akbar",
  },
  {
    title: "General Secretary",
    name: "Nasib Talukder",
    img: General_Secretary,
    email: "nasib@example.com",
    facebook: "https://facebook.com/nasib.talukder",
    linkedin: "https://linkedin.com/in/nasib-talukder",
  },
];

const executiveMembersRow2 = [
  {
    title: "Treasurer",
    name: "Ishtiaque Ahmed",
    img: Treasurer,
    email: "ishtiaque@example.com",
    facebook: "https://facebook.com/ishtiaque",
    linkedin: "https://linkedin.com/in/ishtiaque",
  },
  {
    title: "Vice President",
    name: "MD Shefatullah Bin Sadik",
    img: Vice_President,
    email: "shefatullah@example.com",
    facebook: "https://facebook.com/shefatullah",
    linkedin: "https://linkedin.com/in/shefatullah",
  },
  {
    title: "Joint Secretary",
    name: "Arafatul Hasan Sadoy",
    img: Joint_Secretary,
    email: "sadoy@example.com",
    facebook: "https://facebook.com/sadoy",
    linkedin: "https://linkedin.com/in/sadoy",
  },
];

const ExecutiveBodyMembers = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#0b0e12] to-[#0d1b27] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Executive Body Members
      </h2>

      {/* Row 1: 2 Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto mb-10">
        {executiveMembersRow1.map((member, index) => (
          <div
            key={index}
            className="bg-[#112233] rounded-xl overflow-hidden text-center shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-1">{member.title}</p>
              <h3 className="font-semibold text-base text-white">{member.name}</h3>
              <div className="flex justify-center mt-3 gap-4 text-xl text-[#57a3e8]">
                <a
                  href={`mailto:${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <FaEnvelope className="hover:text-white hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebook className="hover:text-white hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin className="hover:text-white hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: 3 Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {executiveMembersRow2.map((member, index) => (
          <div
            key={index}
            className="bg-[#112233] rounded-xl overflow-hidden text-center shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-1">{member.title}</p>
              <h3 className="font-semibold text-base text-white">{member.name}</h3>
              <div className="flex justify-center mt-3 gap-4 text-xl text-[#57a3e8]">
                <a
                  href={`mailto:${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <FaEnvelope className="hover:text-white hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebook className="hover:text-white hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin className="hover:text-white hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecutiveBodyMembers;
