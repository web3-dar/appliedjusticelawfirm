import React from "react";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import abt2 from '../assets/abt2.jpg'
import img1 from '../assets/log1.webp'
import img2 from '../assets/log2.webp'
import img3 from '../assets/log3.webp'
import img4 from '../assets/log4.webp'

const ContactInfo: React.FC = () => {

  return (
    <>
    <section className="bg-gray-200 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Details */}
        <div className="text-gray-900 space-y-4">
          <p className="text-lg">
            <strong>Via Benedetto Brin, 63, 80142 Naples, Metropolitan City of Naples, Italy</strong>
          </p>

          <p className="flex items-center gap-2">
            <FaPhone/> <span>+31-97005032677</span>
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope/> <a href="mailto:Timothy.brickner@consultant.com" className="hover:underline">Timothy.brickner@consultant.com</a>
          </p>

          <p className="flex items-center gap-2">
            <FaClock/><span>Mon–Sat – 08:00–19:00</span>
          </p>
        </div>

        {/* Embedded Google Map */}
        <div>
          <iframe
            title="Office Location"
            className="w-full h-64 rounded-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0335387114477!2d14.277662077252692!3d40.852796971437254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b086ee1228dd3%3A0x6b2b0f5d2a8f2c6c!2sVia%20Benedetto%20Brin%2C%2063%2C%2080142%20Napoli%20NA%2C%20Italy!5e0!3m2!1sen!2sus!4v1699999999999"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>




      </div>
    </section>
    <div className="bg-[#fff]">
 <div className="text-center mb-12 ">
        <h2 className="text-4xl font-semibold text-[#0a043c] uppercase relative inline-block">
          Applied Justice
          {/* Underline */}
          <span className="block w-16 h-[3px] bg-[#0a043c] mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

        <div>
        <div className="w-full aspect-video mb-5">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/a68QbV88YcU?modestbranding=1&rel=0&showinfo=0&controls=1"
    title="YouTube Video Player"
    frameBorder="0"
    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>


</div> 
</div>

{/* about 2 */}

<div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={abt2}
          alt="Office Interior"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white rounded-lg">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">ABOUT</h2>
          <p className="text-sm leading-relaxed">
            Applied Justice Law Firm, we believe that everyone deserves access
            to high-quality legal representation, regardless of their background
            or circumstances. We are a team of dedicated and experienced
            attorneys committed to fighting tirelessly for the rights of our
            clients.
            <br />
            <br />
            At Applied Justice Law Firm, we don't just handle cases – we empower
            individuals and families to navigate complex legal challenges and
            secure their futures. Contact us today for a consultation and let us
            help you seek the justice you deserve.
          </p>
        </div>
      </div>
    </div>


    {/* {award} */}
    <div className=" p-8 rounded-lg max-w-lg mx-auto">
     
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        <img src={img1} alt="Team Member 1" className="rounded-full w-32 h-32 object-cover" />
        <img src={img2} alt="Team Member 2" className="rounded-full w-32 h-32 object-cover" />
        <img src={img3} alt="Team Member 3" className="rounded-full w-32 h-32 object-cover" />
        <img src={img4} alt="Team Member 4" className="rounded-full w-32 h-32 object-cover" />
      </div>
    </div>
        </>
  );
};

export default ContactInfo;
