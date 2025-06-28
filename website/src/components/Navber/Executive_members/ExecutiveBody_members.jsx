import { FaFacebook, FaLinkedin } from "react-icons/fa";
import President from "../../../assets/Muhammad Atik Akbar.png";
import General_Secretary from "../../../assets/Nasib Talukder.png";
import Vice_President from "../../../assets/MD Shefatullah Bin Sadik.png";
import Treasurer from "../../../assets/Ishtiaque Ahmed.png";
import Joint_Secretary from "../../../assets/Arafatul Hasan Sadoy.png";

const ExecutiveBodySection = () => {
  const firstRow = [
    {
      name: "Muhammad Atik Akbar",
      title: "President",
      img: President,
      description:
        "Mr. Atik Akbar, as the President, provides strategic direction and oversees the overall functioning of the club. He represents the club in official capacities, inspires innovation, and leads with a vision to empower members and elevate the club's impact within and beyond the university.",
    },
    {
      name: "Nasib Talukder",
      title: "General Secretary",
      img: General_Secretary,
      description:
        "As the General Secretary, Mr. Nasib Talukder serves as the operational backbone of the club. He coordinates all internal and external communications, manages schedules, and ensures the smooth execution of meetings, events, and initiatives. His leadership keeps the club running efficiently and aligned with its vision.",
    },
  ];

  const secondRow = [
    {
      name: "MD Shefatullah Bin Sadik",
      title: "Vice President",
      img: Vice_President,
      description:
        "Supporting the President, Mr. Shefatullah Bin Sadik ensures coordination across different departments of the club. He plays a key role in mentoring members, supervising projects, and stepping in when necessary to lead initiatives that foster growth and engagement.",
    },
    {
      name: "Ishtiaque Ahmed",
      title: "Treasurer",
      img: Treasurer,
      description:
        "Mr. Ishtiaque Ahmed handles the financial affairs of the club with precision and transparency. From budgeting to managing expenses and ensuring proper fund allocation, his careful stewardship ensures the club operates well within its means while achieving its goals.",
    },
    {
      name: "Arafatul Hasan Sadoy",
      title: "Joint Secretary",
      img: Joint_Secretary,
      description:
        "As Joint Secretary, Mr. Arafatul Hasan Sadoy assists in the execution of administrative duties, supports event logistics, and ensures seamless collaboration among teams. His dynamic involvement and attention to detail help maintain the club’s operational excellence.",
    },
  ];

  const MemberCard = ({ member }) => (
    <div className="bg-black bg-opacity-20 rounded-xl p-4 flex flex-col items-center shadow-md max-w-sm">
  <img
    src={member.img}
    alt={member.name}
    className="rounded-lg w-full h-80 object-cover px-3 py-3 mb-4"
  />
      <div className="text-center w-[380px]">
        <h3 className="font-semibold">{member.title}</h3>
        <p className="font-bold text-white">{member.name}</p>
        <p className="text-sm mt-2">{member.description}</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook className="hover:text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 py-12 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Executive Body Members</h2>
        <p className="text-lg mt-2">Fiscal Year 2025 - 2026</p>
      </div>

      {/* First Row - 2 members centered */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {firstRow.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>

      {/* Second Row - 3 members */}
      <div className="flex flex-wrap justify-center gap-6">
        {secondRow.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ExecutiveBodySection;
