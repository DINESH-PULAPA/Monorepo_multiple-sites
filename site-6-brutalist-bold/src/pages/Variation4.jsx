import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import profile1 from '../data/profile1.json';
import './Variation4.css';

const Variation4 = () => {
    useEffect(() => {
        document.body.className = 'variation-4';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div className="variation-4">
            <a href="#main" className="skip-to-main">
                Skip to main content
            </a>
            <Header variant="variation-4" data={profile1} />
            <main id="main">
                <Hero data={profile1} variant="variation-4" />
                <About data={profile1} />
                <Experience data={profile1} />
                <Skills data={profile1} />
                <Projects data={profile1} />
                <Education data={profile1} />
                <Contact data={profile1} />
            </main>
            <Footer variant="variation-4" data={profile1} />
        </div>
    );
};

export default Variation4;
