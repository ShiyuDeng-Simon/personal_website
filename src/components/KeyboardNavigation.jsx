import { useEffect } from 'react';

/**
 * KeyboardNavigation enhances website accessibility by implementing keyboard shortcuts
 * and improving focus management for keyboard users.
 */
const KeyboardNavigation = () => {
  useEffect(() => {
    // Add 'focus-visible' class to body when user is navigating with keyboard
    const handleFirstTab = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        
        // Only need to add the class once
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
      }
    };
    
    // Remove class when user starts using mouse
    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing');
      
      // Re-add the keydown event listener
      window.addEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
    
    // Skip to content functionality
    const setupSkipToContent = () => {
      const mainContent = document.querySelector('main');
      const skipLink = document.createElement('a');
      
      skipLink.setAttribute('href', '#main-content');
      skipLink.classList.add('skip-to-content');
      skipLink.textContent = 'Skip to main content';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
      
      if (mainContent) {
        mainContent.setAttribute('id', 'main-content');
        mainContent.setAttribute('tabindex', '-1');
      }
      
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        const mainContent = document.querySelector('#main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView();
        }
      });
    };
    
    // Add keyboard shortcuts for navigation
    const handleKeyboardShortcuts = (e) => {
      // Only apply shortcuts if not in an input, textarea or contenteditable element
      if (e.target.tagName === 'INPUT' || 
          e.target.tagName === 'TEXTAREA' || 
          e.target.contentEditable === 'true') {
        return;
      }
      
      // Use Alt/Option + key combinations to avoid conflicts
      if (e.altKey) {
        switch(e.key) {
          case 'h': // Home
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView();
            break;
          case 'a': // About
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView();
            break;
          case 'p': // Projects
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView();
            break;
          case 'c': // Contact
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView();
            break;
          case 't': // Top
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
          default:
            break;
        }
      }
    };
    
    // Focus trap for modals (if any in the future)
    const setupFocusTraps = () => {
      // Add focus trap logic here if modals are added
    };
    
    // Enhance accessibility of navigation links
    const enhanceNavLinks = () => {
      const navLinks = document.querySelectorAll('.navbar-links a');
      
      navLinks.forEach(link => {
        // Ensure links have proper aria attributes
        if (!link.getAttribute('aria-label')) {
          link.setAttribute('aria-label', `Navigate to ${link.textContent} section`);
        }
        
        // Enhance focus visibility
        link.addEventListener('focus', () => {
          link.parentElement.classList.add('focus-within');
        });
        
        link.addEventListener('blur', () => {
          link.parentElement.classList.remove('focus-within');
        });
      });
    };
    
    // Initialize all keyboard navigation features
    window.addEventListener('keydown', handleFirstTab);
    window.addEventListener('keydown', handleKeyboardShortcuts);
    
    setupSkipToContent();
    enhanceNavLinks();
    
    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('keydown', handleKeyboardShortcuts);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
  }, []);

  // This component doesn't render anything, it just adds functionality
  return null;
};

export default KeyboardNavigation;
