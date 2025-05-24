import React from 'react';
import Event_bg from '../../../assets/Event_bg.png';
import Techfest from '../../../assets/Techfest.png';
import Annual_Iftar from '../../../assets/Annual_Iftar .png';
import Mou_signing from '../../../assets/MOU_Signing.png';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const Event = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen "
      style={{ backgroundImage: `url(${Event_bg})` }}
    >
      <div className=" min-h-screen px-4 py-10 ">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mt-10 mb-10">Events and Activities</h1>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* TechFest 2025 */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:flex items-center gap-6 shadow-lg">
            <img
              src={Techfest}
              alt="TechFest"
              className="rounded-xl w-full md:w-1/2 object-cover max-h-[300px]"
            />
            <div className="mt-4 md:mt-0 md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d2c4b] mb-4">TechFest 2025</h2>
              <p className="text-gray-700 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aurora fringilla inceptos, coloribus
                luminum colles undantes et rivos micantes illustrat.
              </p>
              <p className="text-gray-700 mb-4">
                Omnis secundus est tabula rasa, cupidus lineamentorum creativitatits ut propriam narrationem exhibeat.
              </p>
              <div className="flex flex-wrap gap-4">
               <button className="flex items-center gap-2 bg-[#0f4b85] hover:bg-[#0c3d6a] text-white px-5 py-2 rounded-md font-medium">
                 <BsArrowUpRightSquareFill  className="text-xl" />
                  Register
                </button>
                <div className="flex items-center gap-2 border px-4 py-2 rounded-md text-[#0f4b85] border-[#0f4b85]">
                  <FaCalendarAlt />
                  <span>9th - 12th February 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Annual Iftar and NetCom */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Annual Iftar */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4">
              <img
                src={Annual_Iftar}
                alt="Annual Iftar"
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0d2c4b] mb-2">Annual Iftar 2025</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aurora fringilla inceptos, coloribus
                luminum colles undantes et rivos micantes illustrat.
              </p>
            </div>

            {/* NetCom Learning */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4">
              <img
                src={Mou_signing}
                alt="NetCom Learning"
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0d2c4b] mb-2">NetCom Learning BD x NSUCEC</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aurora fringilla inceptos, coloribus
                luminum colles undantes et rivos micantes illustrat.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="text-center pt-6">
            <button className="flex items-center gap-2 mx-auto bg-[#0f4b85] hover:bg-[#0c3d6a] text-white px-6 py-2 rounded-md font-semibold">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
