import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-left">
          <p className="mb-4 text-lg leading-relaxed">
            Founded in 1997, the North South University Computer & Engineering Club (NSUCEC) is the <span className="font-bold">only engineering-focused student organization at North South University</span>. With a legacy of innovation and leadership, NSUCEC brings together passionate students in fields like <span className="font-semibold text-cyan-300">programming, robotics, AI, design</span>, and <span className="font-semibold text-cyan-300">tech entrepreneurship</span>.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Through events, competitions, workshops, and collaboration with industry leaders, we provide a platform for students to <span className="font-bold">grow, explore</span>, and <span className="font-bold">lead</span> in today’s dynamic tech world. Our mission is to <span className="font-bold">bridge academic knowledge with real-world technology</span>, empowering the next generation of problem-solvers and innovators.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/your-image-path.png" // Replace with your actual image path
            alt="About NSUCEC"
            className="rounded-xl w-full max-w-md h-auto object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
