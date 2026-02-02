
import Header from '../../shared/components/Header';
import Hero from './components/Hero';
import About from '../../shared/components/About';
import Experience from '../../shared/components/Experience';
import Skills from '../../shared/components/Skills';
import Projects from '../../shared/components/Projects';
import Education from '../../shared/components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import profile2 from '../../profiles/profile2.json';
import './App.css';

import { ThemeProvider, useTheme } from '../../shared/context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant={theme} data={profile2} />
      <main id="main">
        <Hero data={profile2} variant={theme} />
        <About data={profile2} />
        <Experience data={profile2} />
        <Skills data={profile2} />
        <Projects data={profile2} />
        <Education data={profile2} />
        <Contact data={profile2} />
      </main>
      <Footer variant={theme} data={profile2} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="variation-2">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
