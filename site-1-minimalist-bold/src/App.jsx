import { useEffect } from 'react';
import Header from '../../shared/components/Header';
import Hero from '../../shared/components/Hero';
import About from '../../shared/components/About';
import Experience from '../../shared/components/Experience';
import Skills from '../../shared/components/Skills';
import Projects from '../../shared/components/Projects';
import Education from '../../shared/components/Education';
import Contact from '../../shared/components/Contact';
import Footer from '../../shared/components/Footer';
import profile1 from '../../profiles/profile1.json';
import './App.css';

function App() {
  useEffect(() => {
    document.body.className = 'variation-1';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="variation-1">
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant="variation-1" data={profile1} />
      <main id="main">
        <Hero data={profile1} variant="variation-1" />
        <About data={profile1} />
        <Experience data={profile1} />
        <Skills data={profile1} />
        <Projects data={profile1} />
        <Education data={profile1} />
        <Contact data={profile1} />
      </main>
      <Footer variant="variation-1" data={profile1} />
    </div>
  );
}

export default App;
