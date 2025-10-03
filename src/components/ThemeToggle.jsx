import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, isLight, isSystem } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
        return '💻';
      default:
        return '🌓';
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'light':
        return 'Currently: Light Mode - Click for Dark Mode';
      case 'dark':
        return 'Currently: Dark Mode - Click for System Mode';
      case 'system':
        return `Currently: System Mode (${isDark ? 'Dark' : 'Light'}) - Click for Light Mode`;
      default:
        return 'Theme Toggle';
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      <div className="theme-icon">
        <span className="icon-sun">☀️</span>
        <span className="icon-moon">🌙</span>
        <span className="icon-system">💻</span>
      </div>
      <div className="theme-indicators">
        <div className={`indicator indicator-light ${theme === 'light' ? 'active' : ''}`} />
        <div className={`indicator indicator-dark ${theme === 'dark' ? 'active' : ''}`} />
        <div className={`indicator indicator-system ${theme === 'system' ? 'active' : ''}`} />
      </div>
      <span className="theme-status">
        {isSystem ? (isDark ? 'Auto Dark' : 'Auto Light') : theme.charAt(0).toUpperCase() + theme.slice(1)}
      </span>
    </button>
  );
};

export default ThemeToggle;
