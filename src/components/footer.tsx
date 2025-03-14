import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-[#ccc] py-8 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center shadow-md">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Applied Justice Law Firm</h2>
          <p className="text-sm mt-2">Copyright © 2025 All rights reserved</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2 text-sm">
            <a href="#" className="hover:underline">Terms</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Navigation Links */}
          <nav className="flex  flex-wrap m-auto justify-center space-x-6 text-sm font-semibold">
            <Link to="/" className="hover:underline">HOME</Link>
            <Link to="/services" className="hover:underline">SERVICES</Link>
            <Link to="/consultants" className="hover:underline">CONSULTANTS</Link>
            <Link to="/team" className="hover:underline">TEAM</Link>
            <Link to="/about" className="hover:underline">ABOUT</Link>
            <Link to="/testimonials" className="hover:underline">TESTIMONIALS</Link>
            <Link to="/consultation" className="hover:underline">REQUEST CONSULTATION</Link>
           
          </nav>
  
          {/* Subscribe Form */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <span className="p-3 bg-gray-100">
              <FaEnvelope/>
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 outline-none text-sm w-48"
            />
            <button className="bg-black text-white px-4 py-2 text-sm hover:opacity-80">
              SUBSCRIBE
            </button>
          </div>
  
          
        </div>
      </footer>
    );
  };
  
  export default Footer;
  