import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ data, variant = 'default' }) => {
    const { basics } = data;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className={`hero hero-${variant}`} id="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-greeting" variants={itemVariants}>
                        <span className="greeting-text">Hello, I'm</span>
                    </motion.div>

                    <motion.h1 className="hero-name" variants={itemVariants}>
                        {basics.firstName} {basics.lastName}
                    </motion.h1>

                    <motion.p className="hero-label" variants={itemVariants}>
                        {basics.label}
                    </motion.p>

                    <motion.p className="hero-summary" variants={itemVariants}>
                        {basics.summary}
                    </motion.p>

                    <motion.div className="hero-cta" variants={itemVariants}>
                        {basics.headerContacts && basics.headerContacts.length > 0 && (
                            <div className="hero-contacts">
                                {basics.headerContacts.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className="btn btn-primary"
                                        target={contact.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                    >
                                        {contact.icon && <span className="contact-icon">{contact.icon}</span>}
                                        {contact.text || getContactLabel(contact.icon)}
                                    </a>
                                ))}
                            </div>
                        )}
                        <a href="#about" className="btn btn-secondary">
                            Learn More
                        </a>
                    </motion.div>

                    {/* Scroll Indicator (for Variation 3) */}
                    {variant === 'variation-3' && (
                        <motion.div
                            className="scroll-indicator"
                            variants={itemVariants}
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <div className="scroll-arrow">↓</div>
                            <span className="scroll-text">Scroll to explore</span>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

// Helper function to get contact label from icon name
const getContactLabel = (icon) => {
    const labels = {
        Phone: 'Call',
        Mail: 'Email',
        LinkedIn: 'LinkedIn',
        Dribbble: 'Portfolio',
        GitHub: 'GitHub',
    };
    return labels[icon] || 'Contact';
};

export default Hero;
