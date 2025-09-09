import { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to true for dark mode
  
  // Check for user preference on initial load
  useEffect(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      // No preference stored, default to dark mode
      setDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  }, []);
  
  // Update DOM when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme} 
        className={`toggle-button ${darkMode ? 'dark' : 'light'}`}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="toggle-track">
          <span className="toggle-thumb">
            <span className="toggle-icon">
              {darkMode ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
