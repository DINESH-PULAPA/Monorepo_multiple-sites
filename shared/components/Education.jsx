import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = ({ data }) => {
    const { education } = data;

    if (!education || education.length === 0) return null;

    return (
        <section className="section education" id="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Education</h2>
                </motion.div>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="education-icon">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <h3
                                className="institution-name text-[var(--text-secondary)]"
                            >
                                {edu.institutionFirstPart}{' '}
                                {edu.institutionSecondPart && <span>{edu.institutionSecondPart}</span>}
                            </h3>
                            <p className="degree">
                                {edu.studyType} in {edu.area}
                            </p>
                            <p className="education-period">
                                {edu.startDate} - {edu.endDate}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
