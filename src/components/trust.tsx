import React, { useEffect, useState } from 'react';
import legalImage from '../assets/pos.jpg'; // Replace with your image path

const Trust: React.FC = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById('hero-section');
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate scroll progress within the section (0 to 1)
          const scrollProgress = Math.min(
            Math.max((windowHeight - top) / (windowHeight + height), 0),
            1
          );
          setScrollPercent(scrollProgress);
          console.log(scrollPercent);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <section className="relative w-full h-[80vh] bg-gray-100 overflow-hidden">
    <div className="flex flex-col lg:flex-row h-full">

      {/* Left: Fixed Text Section */}
      <div className="lg:w-1/2 flex items-center justify-center px-8 lg:px-16 py-12">
        <div className="max-w-lg sticky top-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Your Trusted <br /> Legal Advisors
          </h1>
          <div className="w-20 h-1 bg-black mb-8"></div>
          <p className="text-lg text-gray-700 mb-8">
            Expertise. Compassion. Results.
          </p>
          <p className="text-md text-gray-600 leading-relaxed mb-6">
            We provide personalized legal solutions to meet your specific needs. From estate planning to family law, our experienced attorneys are here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Right: Scrollable Image Section */}
      <div className="lg:w-1/2 relative overflow-y-auto h-full hidden lg:block">
        <div
          className="absolute top-0 left-0 w-full h-[200%] bg-cover bg-top"
          style={{ backgroundImage: `url(${legalImage})` }}
        ></div>
      </div>

      {/* Mobile Image (Visible on small screens) */}
      <div className="lg:hidden">
        <img
          src={legalImage}
          alt="Legal Discussion"
          className="w-full h-auto"
        />
      </div>

    </div>
  </section>
  );
};

export default Trust;
