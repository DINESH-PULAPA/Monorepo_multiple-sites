import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import './About.css';

const About = ({ data }) => {
    const { achievements } = data;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="section about" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">{data.basics.summary}</p>
                </motion.div>

                {achievements && achievements.length > 0 && (
                    <motion.div
                        className="achievements-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <h3 className="achievements-title">Achievements & Recognition</h3>
                        {achievements.map((achievement, index) => (
                            <motion.div key={index} className="achievement-card card" variants={itemVariants}>
                                <div className="achievement-icon">
                                    <Trophy className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="achievement-head text-[var(--text-secondary)]">{achievement.head}</h4>
                                <p className="achievement-desc">{achievement.desc}</p>
                                {achievement.link && achievement.link !== '#' && (
                                    <a
                                        href={achievement.link}
                                        className="achievement-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn more →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default About;
