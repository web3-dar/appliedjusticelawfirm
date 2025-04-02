import React, { useEffect, useState } from 'react';
import consultationImage from '../assets/consult.jpg'; 
import consultationImage2 from '../assets/jurgen.jpg'; 
import consultationImage3 from '../assets/iketa.jpg'; 
import { FaEnvelope, FaPhone, FaCreditCard } from 'react-icons/fa';

const Consultation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect if the component is in view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('consultation-section');
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="consultation-section" className="bg-gray-100 py-12 font-poppins">

<div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#0a043c] uppercase relative inline-block">
        Consultants
          {/* Underline */}
          <span className="block w-16 h-[3px] bg-[#0a043c] mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>


      <div
        className={`container mx-auto px-6 lg:px-20 transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* Left: Image */}
          <div
            className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-transform duration-1000 ease-in-out ${
              isVisible ? 'translate-y-0' : 'translate-y-10'
            }`}
          >
            <img
              src={consultationImage}
              alt="Attorney Consultation"
              className="shadow-lg w-full max-h-[500px] object-cover "
            />
          </div>

          {/* Right: Content */}
          <div
  className={`lg:w-1/2 text-center space-y-6 transform transition-transform duration-1000 delay-200 ${
    isVisible ? 'translate-y-0' : 'translate-y-10'
  }`}
>
  <h2 className="text-4xl font-bold text-gray-900">Att. Lucia Rocca</h2>
  <div className="w-20 h-1 bg-black mx-auto"></div>

  <p className="text-lg text-gray-700 font-semibold leading-relaxed">
    Family and Matrimonial Law, Commercial Litigation, Civil Litigation, and Property Law  
    <br />
    LLB Cum Laude (University of Milan)
  </p>

  <p className="text-gray-600 leading-relaxed">
    With a distinguished LLB Cum Laude from the University of Milan, Att. Lucia Rocca specializes in Family and Matrimonial Law, Commercial Litigation, Civil Litigation, and Property Law. Her client-centered approach and meticulous attention to detail ensure effective and tailored legal solutions.
  </p>

  {/* Contact Icons */}
  <div className="flex justify-center space-x-6 text-gray-800">
    <a href="mailto:luciaroccalegalprac@italymail.com" className="hover:text-purple-600 transition-transform duration-300 hover:scale-110">
      <FaEnvelope size={32} />
    </a>
    <a href="#" className="hover:text-purple-600 transition-transform duration-300 hover:scale-110">
      <FaCreditCard size={32} />
    </a>
    <a href="tel:+61480044831" className="hover:text-purple-600 transition-transform duration-300 hover:scale-110">
      <FaPhone size={32} />
    </a>
  </div>

  {/* Read More */}
  <a
    href="#"
    className="text-gray-800 hover:text-purple-600 font-semibold inline-flex items-center transition-transform duration-300 transform hover:translate-x-1"
  >
    Read More &gt;
  </a>
</div>

        </div>
      </div>

      <br /> <br />
      <div
        className={`container mx-auto px-6 lg:px-20 transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
 {/* Right: Content */}
 <div
  className={`lg:w-1/2 text-center space-y-6 transform transition-transform duration-1000 delay-200 ${
    isVisible ? 'translate-y-0' : 'translate-y-10'
  }`}
>
  <h2 className="text-4xl font-bold text-[#000000]">David Reynolds</h2>
  <div className="w-20 h-1 bg-black mx-auto"></div>

  <p className="text-lg text-gray-700 font-semibold leading-relaxed">
    Corporate Law Specialist LLB (University of Pretoria)
  </p>

  <p className="text-gray-600 leading-relaxed">
    David Reynolds is a seasoned Corporate Law expert with over 18 years of experience. He specializes in business litigation and regulatory compliance, providing clients with strategic legal solutions and dedicated representation.
  </p>
</div>

          {/* Left: Image */}
          <div
            className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-transform duration-1000 ease-in-out ${
              isVisible ? 'translate-y-0' : 'translate-y-10'
            }`}
          >
            <img
              src={consultationImage2}
              alt="Attorney Consultation"
              className="shadow-lg w-full max-h-[500px] object-cover "
            />
          </div>

         
        </div>
      </div>
      <br /> <br />
      <div
        className={`container mx-auto px-6 lg:px-20 transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* Left: Image */}
          <div
            className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-transform duration-1000 ease-in-out ${
              isVisible ? 'translate-y-0' : 'translate-y-10'
            }`}
          >
            <img
              src={consultationImage3}
              alt="Attorney Consultation"
              className="shadow-lg w-full max-h-[500px] object-cover "
            />
          </div>

          {/* Right: Content */}
          <div
  className={`lg:w-1/2 text-center space-y-6 transform transition-transform duration-1000 delay-200 ${
    isVisible ? 'translate-y-0' : 'translate-y-10'
  }`}
>
  <h2 className="text-4xl font-bold text-gray-900">Ethan Parker</h2>
  <div className="w-20 h-1 bg-black mx-auto"></div>

  <p className="text-lg text-gray-700 font-semibold leading-relaxed">
    Paralegal Specialist
  </p>

  <p className="text-gray-600 leading-relaxed">
    Ethan provides comprehensive legal research and administrative support, ensuring the smooth handling of client cases and internal operations.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Consultation;
