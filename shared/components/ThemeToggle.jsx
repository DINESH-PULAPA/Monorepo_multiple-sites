import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, changeTheme } = useTheme();

    const themes = [
        {
            id: 'variation-1',
            name: 'Minimalist Bold'
        },
        {
            id: 'variation-2',
            name: 'Professional Dark'
        },
        {
            id: 'variation-3',
            name: 'Modern Tech'
        },
        {
            id: 'variation-4',
            name: 'Gradient Modern'
        },
        {
            id: 'variation-5',
            name: 'Glassmorphism'
        },
        {
            id: 'variation-6',
            name: 'Brutalist Bold'
        }
    ];

    const currentTheme = themes.find(t => t.id === theme) || themes[0];

    const handleThemeToggle = () => {
        const currentIndex = themes.findIndex(t => t.id === theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        changeTheme(themes[nextIndex].id);
    };

    return (
        <button
            onClick={handleThemeToggle}
            className="theme-toggle-btn"
            style={{
                background: 'transparent',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginLeft: '1rem',
                color: 'var(--color-text)'
            }}
            aria-label="Cycle through themes"
            title={`Current: ${currentTheme.name} - Click to change`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </button>
    );
};

export default ThemeToggle;
