import { motion } from 'framer-motion';
import './Contact.css';

const Contact = ({ data }) => {
    const { basics } = data;
    const allContacts = [
        ...(basics.headerContacts || []),
        ...(basics.barContacts || []),
    ];

    // Remove duplicates based on link
    const uniqueContacts = allContacts.filter(
        (contact, index, self) =>
            index === self.findIndex((c) => c.link === contact.link)
    );

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's connect and discuss how we can work together.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-links"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {uniqueContacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.link}
                            className="contact-link card"
                            target={contact.link.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="contact-icon">{getIconEmoji(contact.icon)}</span>
                            <span className="contact-label">
                                {contact.text || getContactLabel(contact.icon)}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// Helper functions
const getIconEmoji = (icon) => {
    const icons = {
        Phone: '📱',
        Mail: '✉️',
        LinkedIn: '💼',
        Dribbble: '🎨',
        GitHub: '💻',
        Twitter: '🐦',
    };
    return icons[icon] || '🔗';
};

const getContactLabel = (icon) => {
    const labels = {
        Phone: 'Call Me',
        Mail: 'Email Me',
        LinkedIn: 'LinkedIn',
        Dribbble: 'Dribbble',
        GitHub: 'GitHub',
        Twitter: 'Twitter',
    };
    return labels[icon] || 'Contact';
};

export default Contact;
