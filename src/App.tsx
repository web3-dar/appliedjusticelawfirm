import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header';
import ServicePage from './pages/servicePage';
import Home from './pages/home';
import ConsulPage from './pages/consultationPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/aboutPage';
import TestimonailPage from './pages/TestimonialPage';
import ReConsultPage from './pages/ReConsultPage';
import Footer from './components/footer';
import ScrollToTop from './components/scroll2top';



const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header/>
        <ScrollToTop />
        <Routes>

        <Route path="/services" element={<ServicePage />} />
        <Route path="/consultants" element={<ConsulPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/consultation" element={<ReConsultPage />} />
        <Route path="/testimonials" element={<TestimonailPage />} />
        <Route path="/" element={<Home />} />
         
         
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
