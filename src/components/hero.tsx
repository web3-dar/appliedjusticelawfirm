// src/components/HeroSection.tsx
import { Link } from "react-router-dom";
import HeroBanner from '../assets/hero.webp'

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex justify-center items-center px-6">
        
        {/* Card */}
        <div className="bg-white p-8 max-w-md bg-[#000000] shadow-lg text-start">
          <h1 className="text-4xl font-bold text-white mb-6">Your Justice, Our Priority</h1>

          <hr className="mb-4"/>
          <p className="text-gray-400 mb-6">
          Navigating legal complexities with expertise and care
          </p>
          <Link
            to="/consultants"
            className="bg-white  text-black px-6 py-3 hover:border hover:border-white hover:bg-transparent hover:text-white uppercase transition duration-300"
          >
            Get a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
