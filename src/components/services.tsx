import React, { useEffect, useState } from 'react';

// Import images
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Observe when component enters viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services-section');
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      image: service1,
      title: 'Estate Planning',
      description:
        'Offering tailored estate planning solutions to ensure your assets are distributed according to your wishes.',
    },
    {
      id: 2,
      image: service2,
      title: 'Probate Services',
      description: `Providing comprehensive probate services to help manage and settle your loved one's estate efficiently.`,
    },
    {
      id: 3,
      image: service3,
      title: 'Family Law',
      description: `Handling all family law matters including divorce, custody, and support with sensitivity and skill.`,
    },
  ];

  return (
    <section
      id="services-section"
      className="bg-gray-200 py-16 px-8 font-[Poppins] overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#0a043c] uppercase relative inline-block">
          Services
          {/* Underline */}
          <span className="block w-16 h-[3px] bg-[#0a043c] mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

      {/* Services Cards */}
      <div className="gap-4 max-w-6xl mx-auto flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`p-6 text-center transition-transform transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            } duration-700 ease-out delay-[${index * 200}ms] min-w-[calc(33.33%-1rem)]`}
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-[100px] h-[100px] rounded-full mx-auto mb-4"
            />
            {/* Service Title */}
            <h3 className="text-xl font-semibold text-[#0a043c] mb-2">
              {service.title}
            </h3>
            {/* Service Description */}
            <p className="text-gray-600 w-[130px] text-sm m-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
