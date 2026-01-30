import { useEffect } from 'react';
import Header from '../../shared/components/Header';
import Hero from './components/Hero';
import About from '../../shared/components/About';
import Experience from '../../shared/components/Experience';
import Skills from '../../shared/components/Skills';
import Projects from '../../shared/components/Projects';
import Education from '../../shared/components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import profile3 from '../../profiles/profile3.json';
import './App.css';

function App() {
  useEffect(() => {
    document.body.className = 'variation-6';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="variation-6">
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant="variation-6" data={profile3} />
      <main id="main">
        <Hero data={profile3} variant="variation-6" />
        <About data={profile3} />
        <Experience data={profile3} />
        <Skills data={profile3} />
        <Projects data={profile3} />
        <Education data={profile3} />
        <Contact data={profile3} />
      </main>
      <Footer variant="variation-6" data={profile3} />
    </div>
  );
}

export default App;
