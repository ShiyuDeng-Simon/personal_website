import { useEffect, useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const footerEl = document.querySelector('.footer');
    if (footerEl) {
      observer.observe(footerEl);
    }
    
    return () => {
      if (footerEl) {
        observer.unobserve(footerEl);
      }
    };
  }, []);
  
  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">Shiyu (Simon) Deng</h3>
            <p className="footer-tagline">Computer Science Student</p>
            <p>Based in Vancouver, BC</p>
            
            <div className="footer-social">
              <a href="https://github.com/ShiyuDeng-Simon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/simon-deng-sy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><i className="fas fa-envelope"></i> <a href="mailto:simondeng.sy@gmail.com" className="footer-link">simondeng.sy@gmail.com</a></p>
            <p><i className="fas fa-phone"></i> <a href="tel:2365086978" className="footer-link">236-508-6978</a></p>
            <p><i className="fas fa-map-marker-alt"></i> Vancouver, BC</p>
          </div>
          
          <div className="footer-skills">
            <h4>Technical Skills</h4>
            <div className="footer-skills-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C++</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} <span className="highlight">Shiyu (Simon) Deng</span>. All rights reserved.</p>
          <p className="footer-credit">Designed & Built with <span className="heart">❤</span></p>
        </div>
      </div>
      
      <div className="footer-shape shape-1"></div>
      <div className="footer-shape shape-2"></div>
    </footer>
  );
};

export default Footer;
