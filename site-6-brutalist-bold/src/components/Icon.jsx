import {
    Phone,
    Mail,
    Linkedin,
    Github,
    Briefcase,
    Globe,
    ExternalLink,
    User,
    Code,
    Palette,
    Award,
    GraduationCap,
    MapPin,
    Calendar,
    ChevronRight,
    Menu,
    X,
} from 'lucide-react';

// Map of icon names to Lucide React components
const iconMap = {
    Phone,
    Mail,
    LinkedIn: Linkedin,
    Linkedin,
    GitHub: Github,
    Github,
    Dribbble: Palette, // Using Palette as a substitute for Dribbble
    Palette,
    Briefcase,
    Portfolio: Globe,
    Globe,
    ExternalLink,
    User,
    Code,
    Award,
    GraduationCap,
    MapPin,
    Calendar,
    ChevronRight,
    Menu,
    X,
};

/**
 * Icon component that renders Lucide icons based on string names
 * @param {Object} props
 * @param {string} props.name - The name of the icon (e.g., 'Phone', 'Mail')
 * @param {number} props.size - Size of the icon in pixels (default: 20)
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.strokeWidth - Stroke width (default: 2)
 * @returns {JSX.Element | null}
 */
const Icon = ({ name, size = 20, className = '', strokeWidth = 2, ...props }) => {
    if (!name) return null;

    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in iconMap`);
        return null;
    }

    return (
        <IconComponent
            size={size}
            className={className}
            strokeWidth={strokeWidth}
            {...props}
        />
    );
};

export default Icon;
