import { motion } from 'framer-motion';
import './Projects.css';

const Projects = ({ data }) => {
    const { projects } = data;

    if (!projects || projects.length === 0) return null;

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="project-header">
                                <h3 className="project-company">{project.company}</h3>
                                {project.date && (
                                    <span className="project-date">
                                        {new Date(project.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                        })}
                                    </span>
                                )}
                            </div>
                            <p className="project-summary">{project.summary}</p>
                            {project.highlights && project.highlights.length > 0 && (
                                <ul className="project-highlights">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            )}
                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
