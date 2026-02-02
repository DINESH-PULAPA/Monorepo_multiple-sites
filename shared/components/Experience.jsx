import { motion } from 'framer-motion';
import './Experience.css';

const Experience = ({ data }) => {
    const { work } = data;

    if (!work || work.length === 0) return null;

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Work Experience</h2>
                </motion.div>

                <div className="timeline">
                    {work.map((job, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content card">
                                <div className="job-header">
                                    <h3
                                        className="company-name text-[var(--text-secondary)]"
                                    >
                                        {job.company}
                                    </h3>
                                    <span className="job-period">
                                        {job.start.month} {job.start.year} - {job.end.month} {job.end.year}
                                    </span>
                                </div>
                                <p className="job-position">{job.start.position}</p>
                                <p className="job-summary">{job.summary}</p>
                                {job.highlights && job.highlights.length > 0 && (
                                    <ul className="job-highlights">
                                        {job.highlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
