import React from 'react';
import advisorImage from '../../../assets/faculty-advisor.png';

const FacultyAdvisor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12 flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">Our Faculty Advisor</h2>

      {/* Image */}
      <div className="w-full max-w-xs mb-6">
        <img
            src={advisorImage}
          alt="Mr. Md. Shahriar Hussain, Faculty Advisor of NSUCEC"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Name and Title */}
      <div className="mb-2">
        <h3 className="text-2xl font-bold">Mr. Md. Shahriar Hussain</h3>
        <p className="text-sm text-gray-300">Senior Lecturer, Department of ECE</p>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-base leading-relaxed text-gray-200">
        Mr. Md. Shahriar Hussain serves as the esteemed Faculty Advisor of NSUCEC. With a strong academic background and a passion for empowering students in the field of technology, he brings both guidance and inspiration to the club. His dedication to fostering a culture of innovation and collaboration has helped NSUCEC grow into one of the most active and respected student organizations at North South University. Under his mentorship, the club continues to thrive, bridging the gap between classroom learning and real-world engineering challenges.
      </p>
    </div>
  );
};

export default FacultyAdvisor;
