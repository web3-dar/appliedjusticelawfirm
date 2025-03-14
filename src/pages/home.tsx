import React from 'react';

import HeroSection from '../components/hero';
import Services from '../components/services';
import Trust from '../components/trust';
import Consultation from '../components/consultation';
import Team from '../components/Team';
import AboutUs from '../components/about';
import Testimonials from '../components/testimonial';
import ConsultationForm from '../components/ReConsult';
import ContactInfo from '../components/ContactInfo';

const Home: React.FC = () => {
  return (
    <><HeroSection/>
    <Services/>
    <Trust/>
    <Consultation/>
    <Team/>
    <AboutUs/>
    <Testimonials/>
    <ConsultationForm/>
    <ContactInfo/>
    
    </>
  );
};

export default Home;
