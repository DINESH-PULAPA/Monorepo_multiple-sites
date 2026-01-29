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
import profile2 from '../data/profile2.json';
import './Variation2.css';

const Variation2 = () => {
    useEffect(() => {
        document.body.className = 'variation-2';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div className="variation-2">
            <a href="#main" className="skip-to-main">
                Skip to main content
            </a>
            <Header variant="variation-2" data={profile2} />
            <main id="main">
                <Hero data={profile2} variant="variation-2" />
                <About data={profile2} />
                <Experience data={profile2} />
                <Skills data={profile2} />
                <Projects data={profile2} />
                <Education data={profile2} />
                <Contact data={profile2} />
            </main>
            <Footer variant="variation-2" data={profile2} />
        </div>
    );
};

export default Variation2;
