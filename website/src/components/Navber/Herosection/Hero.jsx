import React from 'react';
import hero from '../../../assets/Hero.png';

const Hero = () => {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero Background"
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center  text-center">
        {/* Heading */}
        <h1 className="  text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bebas font-stretch-50% font-bold" >
            CREATING TECH LEADERS
        </h1>
        <span className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bebas font-stretch-50% font-bold ">OF TOMORROW</span>
        <div className="mt-20 md:mt-20 mb-15 flex flex-row flex-wrap gap-4 sm:gap-6">
  <button className="px-8 py-4 bg-gradient-to-r from-blue-300 to-sky-900 hover:from-blue-400 transition rounded-md text-white font-semibold shadow-md">
    Join the Club
  </button>
  <button className="px-8 py-4 bg-gradient-to-r bg-white rounded-md text-black font-semibold shadow-md">
    Explore
  </button>
</div>

        {/* Stats Section */}
        <div className="  sm:mt-16 md:mt-28 lg:mt-32  flex flex-col sm:flex-row gap-20 md:gap-20  text-center text-white" >
          <div>
            <p className="text-6xl sm:text-5xl md:text-4xl font-bold ">200+</p>
            <p className=" sm:text-xl md:text-2xl font-medium">Active<br />Members</p>
          </div>
          <div>
            <p className="text-6xl sm:text-5xl md:text-4xl font-bold">50+</p>
            <p className=" sm:text-xl md:text-2xl font-medium">Events<br />Organized</p>
          </div>
          <div>
            <p className="text-6xl sm:text-5xl md:text-4xl font-bold">10+</p>
            <p className=" sm:text-xl md:text-2xl font-medium">Industry<br />Collaborations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
