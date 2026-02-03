import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '@portfolio/themes';
import { Header, Hero, About, Experience, Skills, Projects, Education, Contact, Footer } from '@portfolio/ui';
import profile1 from './data/profile1.json';

const Layout = () => {
  // Theme is applied to body by ThemeContext, but we can pass it to components if they need it for specific variant classes
  const { theme } = useTheme();

  return (
    <div className="app-layout">
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>
      <Header variant={theme} data={profile1} />
      <main id="main">
        <Hero data={profile1} variant={theme} />
        <About data={profile1} variant={theme} />
        <Experience data={profile1} />
        <Skills data={profile1} />
        <Projects data={profile1} />
        <Education data={profile1} />
        <Contact data={profile1} />
      </main>
      <Footer variant={theme} data={profile1} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* Redirect legacy routes to home for now, or we could handle them if needed */}
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
