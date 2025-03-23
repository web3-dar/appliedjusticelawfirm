// src/components/Header.tsx
import { useState } from "react";
import { FaBars, FaEnvelope, FaTimes } from "react-icons/fa";
import usaFlag from "../assets/itl.png";
import logo from "../assets/400_filter_nobg_66dbd499f0438.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo & Menu Button */}
        <div className="flex items-center gap-4">
          <button onClick={toggleMenu} className="md:hidden text-2xl text-white">
            <FaBars />
          </button>
          <img src={logo} alt="Law Firm Logo" width={80} height={100} />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/consultants" label="Consultants" />
          <NavLink to="/team" label="Team" />
          <NavLink to="/about" label="About" />
          <NavLink to="/testimonials" label="Testimonials" />
          <NavLink to="/consultation" label="Request Consultation" />
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <img src={usaFlag} alt="USA Flag" className="w-8 h-4" />
          <a href="mailto:luciaroccalegalprac@italymail.com" className="text-xl text-white hover:text-red-600 transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <button onClick={closeMenu} className="absolute top-6 right-6 text-xl">
            <FaTimes />
          </button>
          <MobileLink to="/" label="Home" close={closeMenu} />
          <MobileLink to="/services" label="Services" close={closeMenu} />
          <MobileLink to="/consultants" label="Consultants" close={closeMenu} />
          <MobileLink to="/team" label="Team" close={closeMenu} />
          <MobileLink to="/about" label="About" close={closeMenu} />
          <MobileLink to="/testimonials" label="Testimonials" close={closeMenu} />
          <MobileLink to="/consultation" label="Request Consultation" close={closeMenu} />
        </div>
      )}
    </header>
  );
};

// Component for navigation links (desktop)
const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-white hover:text-red-600 transition duration-300 font-semibold uppercase"
  >
    {label}
  </Link>
);

// Component for mobile menu links
const MobileLink = ({ to, label, close }: { to: string; label: string; close: () => void }) => (
  <Link
    to={to}
    onClick={close}
    className="text-xl my-4 hover:text-red-600 transition duration-300 font-bold uppercase"
  >
    {label}
  </Link>
);

export default Header;
