import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children, defaultTheme = 'variation-1' }) => {
    const [theme, setTheme] = useState(() => {
        // Load saved theme from localStorage or default
        const savedTheme = localStorage.getItem('theme');
        // If saved theme exists, use it. Otherwise use the site-specific default.
        return savedTheme || defaultTheme;
    });

    useEffect(() => {
        // Save theme to localStorage whenever it changes
        localStorage.setItem('theme', theme);

        // Update document body class
        // Remove all variation classes first to avoid conflicts
        document.body.classList.remove(
            'variation-1', 'variation-2', 'variation-3',
            'variation-4', 'variation-5', 'variation-6'
        );
        document.body.classList.add(theme);
    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
