import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = ({ variant = 'default', data }) => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`footer footer-${variant}`}>
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        © {currentYear} {data?.basics?.firstName} {data?.basics?.lastName}. All rights reserved.
                    </p>
                    {data?.basics?.barContacts && data.basics.barContacts.length > 0 && (
                        <div className="footer-socials">
                            {data.basics.barContacts.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.link}
                                    className="footer-social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={contact.icon || 'Social link'}
                                >
                                    {getIconEmoji(contact.icon)}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Back to Top Button (for Variation 3 and others) */}
            {(variant === 'variation-3' || showBackToTop) && (
                <button
                    className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    ↑
                </button>
            )}
        </footer>
    );
};

const getIconEmoji = (icon) => {
    const icons = {
        LinkedIn: '💼',
        GitHub: '💻',
        Twitter: '🐦',
        Dribbble: '🎨',
    };
    return icons[icon] || '🔗';
};

export default Footer;
