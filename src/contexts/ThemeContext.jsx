import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or default to system
    const savedTheme = localStorage.getItem('currency-converter-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Default to system preference
    return 'system';
  });

  const [actualTheme, setActualTheme] = useState(() => {
    // Determine actual theme based on preference
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  });

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        setActualTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    // Update actual theme based on preference
    if (theme === 'system') {
      setActualTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      setActualTheme(theme);
    }

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', actualTheme);
    
    // Save theme preference
    localStorage.setItem('currency-converter-theme', theme);
  }, [theme, actualTheme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const value = {
    theme,
    actualTheme,
    toggleTheme,
    setTheme,
    isLight: actualTheme === 'light',
    isDark: actualTheme === 'dark',
    isSystem: theme === 'system'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
