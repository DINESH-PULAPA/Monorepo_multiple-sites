
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

import { ThemeProvider, useTheme } from '../../shared/context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant={theme} data={profile3} />
      <main id="main">
        <Hero data={profile3} variant={theme} />
        <About data={profile3} />
        <Experience data={profile3} />
        <Skills data={profile3} />
        <Projects data={profile3} />
        <Education data={profile3} />
        <Contact data={profile3} />
      </main>
      <Footer variant={theme} data={profile3} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="variation-3">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
