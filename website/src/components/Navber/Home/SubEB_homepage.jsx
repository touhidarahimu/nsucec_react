// import React from "react";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";

// // Import banner and member images
// import SubExecutiveBanner from "../../../assets/sub-executive-banner.jpg"; // Replace with your actual banner image
// import Member1 from "../../../assets/member1.png";
// import Member2 from "../../../assets/member2.png";
// import Member3 from "../../../assets/member3.png";
// import Member4 from "../../../assets/member4.png";
// import Member5 from "../../../assets/member5.png";
// import Member6 from "../../../assets/member6.png";
// import Member7 from "../../../assets/member7.png";
// import Member8 from "../../../assets/member8.png";
// import Member9 from "../../../assets/member9.png";
// import Member10 from "../../../assets/member10.png";
// import Member11 from "../../../assets/member11.png";
// import Member12 from "../../../assets/member12.png";
// import Member13 from "../../../assets/member13.png";
// import Member14 from "../../../assets/member14.png";
// import Member15 from "../../../assets/member15.png";
// import Member16 from "../../../assets/member16.png";

// const members = [
//   {
//     name: "Member One",
//     title: "Role 1",
//     img: Member1,
//     facebook: "https://facebook.com/member1",
//     linkedin: "https://linkedin.com/in/member1",
//   },
//   {
//     name: "Member Two",
//     title: "Role 2",
//     img: Member2,
//     facebook: "https://facebook.com/member2",
//     linkedin: "https://linkedin.com/in/member2",
//   },
//   {
//     name: "Member Three",
//     title: "Role 3",
//     img: Member3,
//     facebook: "https://facebook.com/member3",
//     linkedin: "https://linkedin.com/in/member3",
//   },
//   {
//     name: "Member Four",
//     title: "Role 4",
//     img: Member4,
//     facebook: "https://facebook.com/member4",
//     linkedin: "https://linkedin.com/in/member4",
//   },
//   {
//     name: "Member Five",
//     title: "Role 5",
//     img: Member5,
//     facebook: "https://facebook.com/member5",
//     linkedin: "https://linkedin.com/in/member5",
//   },
//   {
//     name: "Member Six",
//     title: "Role 6",
//     img: Member6,
//     facebook: "https://facebook.com/member6",
//     linkedin: "https://linkedin.com/in/member6",
//   },
//   {
//     name: "Member Seven",
//     title: "Role 7",
//     img: Member7,
//     facebook: "https://facebook.com/member7",
//     linkedin: "https://linkedin.com/in/member7",
//   },
//   {
//     name: "Member Eight",
//     title: "Role 8",
//     img: Member8,
//     facebook: "https://facebook.com/member8",
//     linkedin: "https://linkedin.com/in/member8",
//   },
//   {
//     name: "Member Nine",
//     title: "Role 9",
//     img: Member9,
//     facebook: "https://facebook.com/member9",
//     linkedin: "https://linkedin.com/in/member9",
//   },
//   {
//     name: "Member Ten",
//     title: "Role 10",
//     img: Member10,
//     facebook: "https://facebook.com/member10",
//     linkedin: "https://linkedin.com/in/member10",
//   },
//   {
//     name: "Member Eleven",
//     title: "Role 11",
//     img: Member11,
//     facebook: "https://facebook.com/member11",
//     linkedin: "https://linkedin.com/in/member11",
//   },
//   {
//     name: "Member Twelve",
//     title: "Role 12",
//     img: Member12,
//     facebook: "https://facebook.com/member12",
//     linkedin: "https://linkedin.com/in/member12",
//   },
//   {
//     name: "Member Thirteen",
//     title: "Role 13",
//     img: Member13,
//     facebook: "https://facebook.com/member13",
//     linkedin: "https://linkedin.com/in/member13",
//   },
//   {
//     name: "Member Fourteen",
//     title: "Role 14",
//     img: Member14,
//     facebook: "https://facebook.com/member14",
//     linkedin: "https://linkedin.com/in/member14",
//   },
//   {
//     name: "Member Fifteen",
//     title: "Role 15",
//     img: Member15,
//     facebook: "https://facebook.com/member15",
//     linkedin: "https://linkedin.com/in/member15",
//   },
//   {
//     name: "Member Sixteen",
//     title: "Role 16",
//     img: Member16,
//     facebook: "https://facebook.com/member16",
//     linkedin: "https://linkedin.com/in/member16",
//   },
// ];

// const MemberCard = ({ member }) => (
//   <div className="bg-black bg-opacity-20 rounded-xl p-6 flex flex-col items-center shadow-md max-w-xs w-full">
//     <img
//       src={member.img}
//       alt={member.name}
//       className="rounded-lg w-full h-64 object-cover mb-5"
//     />
//     <h3 className="font-semibold text-xl">{member.title}</h3>
//     <p className="font-bold text-white text-lg mb-2">{member.name}</p>
//     <p className="text-sm text-sky-300 mb-4">Sub Executive Body - NSUCEC</p>
//     <div className="flex justify-center gap-6 text-2xl">
//       <a
//         href={member.linkedin}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={`${member.name} LinkedIn`}
//         className="hover:text-blue-400 transition-colors"
//       >
//         <FaLinkedin />
//       </a>
//       <a
//         href={member.facebook}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={`${member.name} Facebook`}
//         className="hover:text-blue-600 transition-colors"
//       >
//         <FaFacebook />
//       </a>
//     </div>
//   </div>
// );

// const SubEB_homepage = () => {
//   return (
//     <div>
//       {/* Top Banner */}
//       <img
//         src={SubExecutiveBanner}
//         alt="Sub Executive Body Banner"
//         className="w-full h-[300px] object-cover mb-12 rounded-b-xl shadow-lg"
//       />

//       {/* Main Section */}
//       <div className="bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 py-12 text-white">
//         <div className="text-center mb-12 max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Sub-Executive Body Members
//           </h2>
//           <p className="text-lg mt-2">Fiscal Year 2025 - 2026</p>
//         </div>

//         {/* Members grid */}
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
//           {members.map((member, index) => (
//             <MemberCard key={index} member={member} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubEB_homepage;
