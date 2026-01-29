import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    const variations = [
        {
            id: 1,
            name: 'Minimalist Bold',
            description: 'High-contrast yellow/black theme with experimental navigation',
            profile: 'Rohan Deshmukh - UI/UX Designer',
            path: '/variation1',
            color: '#FFD60A',
        },
        {
            id: 2,
            name: 'Professional Dark',
            description: 'Sophisticated dark theme with elegant typography',
            profile: 'Sarah Jenkins - Marketing Manager',
            path: '/variation2',
            color: '#F5F5F5',
        },
        {
            id: 3,
            name: 'Modern Tech',
            description: 'Navy/magenta palette with parallax animations',
            profile: 'Zainab Ali - Data Scientist',
            path: '/variation3',
            color: '#E94560',
        },
        {
            id: 4,
            name: 'Gradient Modern',
            description: 'Vibrant gradients with glassmorphic elements',
            profile: 'Rohan Deshmukh - UI/UX Designer',
            path: '/variation4',
            color: '#8B5CF6',
        },
        {
            id: 5,
            name: 'Glassmorphism Light',
            description: 'Light, airy theme with frosted glass effects',
            profile: 'Sarah Jenkins - Marketing Manager',
            path: '/variation5',
            color: '#0EA5E9',
        },
        {
            id: 6,
            name: 'Brutalist Bold',
            description: 'Raw, bold aesthetic with stark borders',
            profile: 'Zainab Ali - Data Scientist',
            path: '/variation6',
            color: '#FF0000',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="home">
            <div className="container">
                <motion.div
                    className="home-header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="home-title">Portfolio Variations</h1>
                    <p className="home-subtitle">
                        Explore 6 unique design variations showcasing different aesthetics and UI/UX principles.
                        Each variation demonstrates the same professional profiles with distinct visual identities.
                    </p>
                </motion.div>

                <motion.div
                    className="variations-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {variations.map((variation) => (
                        <motion.div key={variation.id} variants={itemVariants}>
                            <Link to={variation.path} className="variation-card">
                                <div
                                    className="variation-color-bar"
                                    style={{ backgroundColor: variation.color }}
                                ></div>
                                <div className="variation-content">
                                    <h2 className="variation-name">{variation.name}</h2>
                                    <p className="variation-description">{variation.description}</p>
                                    <p className="variation-profile">{variation.profile}</p>
                                    <span className="variation-cta">View Portfolio →</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="home-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="footer-note">
                        Built with React, Framer Motion, and modern UI/UX principles.
                        <br />
                        All variations are fully responsive and accessible.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
