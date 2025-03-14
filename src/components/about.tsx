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

  <h3 className="text-xl font-semibold mb-4">Commitment to Excellence</h3>
  <p className="mb-6 leading-relaxed">
    Our law firm specializes in estate planning, probate, and family law. With a wealth of experience, we are committed to offering tailored legal solutions, ensuring clarity, and advocating for our clients' rights with dedication and professionalism.
  </p>

  <h4 className="text-lg font-semibold mb-2">Legal Expertise</h4>
  <p className="mb-6 leading-relaxed">
    We approach every case with a strong foundation in legal principles, always prioritizing the best interests of our clients. Our mission is to uphold justice and provide sound legal guidance.
  </p>

  <h4 className="text-lg font-semibold mb-2">Ethical Standards</h4>
  <p className="leading-relaxed">
    We believe that integrity is the cornerstone of legal practice. By adhering to the highest ethical standards, we ensure that our clients receive honest, transparent, and effective representation.
  </p>

  <h4 className="text-lg font-semibold mb-2">Integrity & Trust</h4>
  <p className="leading-relaxed">
    With over 45 years of combined experience, our team is dedicated to upholding trust, integrity, and unwavering commitment to those we represent, ensuring every case is handled with the utmost care and professionalism.
  </p>

  <br /> <br />
  <button className="bg-black text-white px-8 py-4">Read More</button>
</div>

      </div>
    </section>
  );
};

export default AboutUs;
