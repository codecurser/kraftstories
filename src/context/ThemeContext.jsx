import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'glass';
  });

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    if (theme === 'brutal') {
      document.body.className = 'theme-brutal';
    } else {
      document.body.className = '';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'glass' ? 'brutal' : 'glass'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
