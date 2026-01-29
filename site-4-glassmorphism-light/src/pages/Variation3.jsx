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
import profile3 from '../data/profile3.json';
import './Variation3.css';

const Variation3 = () => {
    useEffect(() => {
        document.body.className = 'variation-3';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div className="variation-3">
            <a href="#main" className="skip-to-main">
                Skip to main content
            </a>
            <Header variant="variation-3" data={profile3} />
            <main id="main">
                <Hero data={profile3} variant="variation-3" />
                <About data={profile3} />
                <Experience data={profile3} />
                <Skills data={profile3} />
                <Projects data={profile3} />
                <Education data={profile3} />
                <Contact data={profile3} />
            </main>
            <Footer variant="variation-3" data={profile3} />
        </div>
    );
};

export default Variation3;
