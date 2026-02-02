
import Header from '../../shared/components/Header';
import Hero from './components/Hero';
import About from '../../shared/components/About';
import Experience from '../../shared/components/Experience';
import Skills from '../../shared/components/Skills';
import Projects from '../../shared/components/Projects';
import Education from '../../shared/components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import profile1 from '../../profiles/profile1.json';
import './App.css';

import { ThemeProvider, useTheme } from '../../shared/context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant={theme} data={profile1} />
      <main id="main">
        <Hero data={profile1} variant={theme} />
        <About data={profile1} />
        <Experience data={profile1} />
        <Skills data={profile1} />
        <Projects data={profile1} />
        <Education data={profile1} />
        <Contact data={profile1} />
      </main>
      <Footer variant={theme} data={profile1} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="variation-1">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
