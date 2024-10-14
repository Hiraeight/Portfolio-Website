import React, { useEffect, useState } from 'react';
import '../css/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import SkillSet from './components/SkillSet';
import AboutMe from './components/AboutMe';
import CatllToAction from './components/CatllToAction';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Simplified visibility check
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <Header />
      <Certificates />
      <Projects />
      <SkillSet />
      <AboutMe />
      <CatllToAction />
      <Footer />

      <div className={`scroll-button ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
        ↑
      </div>
    </>
  );
}

export default App;
