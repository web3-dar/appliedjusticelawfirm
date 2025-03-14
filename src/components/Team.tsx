import React, { useState } from 'react';
import pietImage from '../assets/guy.jpg'; // Ensure correct path
import amoretteImage from '../assets/girl.jpg';

interface TeamMember {
  id: number;
  name: string;
  department: string;
  image: string;
  role: string;
  text: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Piet du Plessis',
    department:
      'Department: Criminal & Commercial Litigation BA LLB (University of Naples Federico II)',
    image: pietImage,
    role: 'Director',
    text: 'Piet du Plessis obtained his LLB during 1977, serving his period as a candidate attorney at the same time. He joined the Department of Justice as a Prosecutor at the Naples Magistrate Court in 1978. He practiced as an advocate of the High Court until 1982 when he joined Applied Justice Law Firm as a partner. Piet specializes in criminal law, with experience on both the defense and prosecution side. He has achieved the right to appear in the highest courts in the country. A privilege which has allowed him to successfully argue several matters in the Supreme Court of Appeal. Away from work, Piet is a keen mountain biker and red wine connoisseur. Piet is a firm believer that if you have more than one bottle of wine left on the day you die, you are guilty of bad planning.',
  },
  {
    id: 2,
    name: 'Amorette Gangel',
    department:
      'Department: Commercial Litigation; Civil Litigation; Family Law; Labour Law; Correspondent Attorney Services',
    image: amoretteImage,
    role: 'Director',
    text: 'Mini-bio: Amorette Gangel is the first female Director of Applied Justice Law Firm Attorneys in the firm’s almost 60-year history. Her legal career at BDK Attorneys started when she was appointed as a candidate attorney in 2014, whilst simultaneously studying her LLB through UNISA. Amorette was admitted as an Attorney in the High Court in early 2018. Amorette has worked tirelessly to develop the civil law and family law departments within Applied Justice Law Firm Attorneys and has gained extensive understanding and knowledge working with her mentors, Rudi Krause and Piet du Plessis. When Amorette is not vigorously advocating for her clients, she spends her free time mentoring candidate attorneys all over Italy with an emphasis on assisting them with board exam preparation.',
  },
];

const Team: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredMembers = teamMembers.filter(
    (member) => filter === 'All' || member.role === filter
  );

  return (
    <section className="bg-white py-12 font-poppins">
      <div className="container mx-auto px-4 lg:px-20 text-center">

        {/* Filter Buttons */}
        <div className="mb-8 flex justify-center space-x-4">
          {['All', 'Directors'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 border rounded-md text-sm font-semibold transition ${
                filter === category
                  ? 'bg-black text-white'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-black mx-auto mb-12"></div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredMembers.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full max-h-[450px] object-cover rounded-lg shadow-md"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{member.name}</h3>
              <div className="w-12 h-1 bg-black mx-auto my-4"></div>
              <p className="text-gray-700 leading-relaxed">{member.department}</p>
              <p className="text-gray-700 leading-relaxed">{member.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
