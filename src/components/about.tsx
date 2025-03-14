import React from 'react';
import aboutImage from '../assets/about.jpg'; // Ensure the correct image path

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Image */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img src={aboutImage} alt="Law Firm" className="w-full object-cover" />
        </div>

        {/* Right: Content */}
        <div className="text-gray-900">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <div className="w-16 h-1 bg-black mb-8"></div>

          <h3 className="text-xl font-semibold mb-4">Law, Ethics & Integrity</h3>
          <p className="mb-6 leading-relaxed">
            Our law firm specializes in inheritance tax claims and family-related legal issues. With years of experience, we are dedicated to providing clients with personalized attention, clear guidance, and effective solutions for estate planning, probate, and family law matters.
          </p>

          <h4 className="text-lg font-semibold mb-2">Law</h4>
          <p className="mb-6 leading-relaxed">
            We strive to encompass our work against the backdrop of moral principles, which ground us in representing our clients and caring for their best interests. Our main goal is to uphold the rule of law.
          </p>

          <h4 className="text-lg font-semibold mb-2">Ethics</h4>
          <p className="leading-relaxed">
          We believe that when our principles are put in their best light, our unwavering fight for our client’s will always succeed.        </p>
          <h4 className="text-lg font-semibold mb-2">Integrity</h4>
          <p className="leading-relaxed">With more than 45  years’ experience, our team are dedicated to ensuring that we act with the greatest integrity and ethical standards when representing our clients</p>
        
        <br /> <br />
        <button className='bg-black text-white px-8 py-4'>Read More</button></div>

      </div>
    </section>
  );
};

export default AboutUs;
