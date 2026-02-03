import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ data }) => {
    const { skills } = data;

    if (!skills || skills.length === 0) return null;

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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Skills & Expertise</h2>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="skill-group card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="skill-group-name">{skillGroup.name}</h3>
                            <motion.div
                                className="skill-tags"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {skillGroup.keywords.map((keyword, idx) => (
                                    <motion.span key={idx} className="skill-tag" variants={itemVariants}>
                                        {keyword}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
