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
import profile2 from '../../profiles/profile2.json';
import './App.css';

function App() {
  useEffect(() => {
    document.body.className = 'variation-5';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="variation-5">
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant="variation-5" data={profile2} />
      <main id="main">
        <Hero data={profile2} variant="variation-5" />
        <About data={profile2} />
        <Experience data={profile2} />
        <Skills data={profile2} />
        <Projects data={profile2} />
        <Education data={profile2} />
        <Contact data={profile2} />
      </main>
      <Footer variant="variation-5" data={profile2} />
    </div>
  );
}

export default App;
