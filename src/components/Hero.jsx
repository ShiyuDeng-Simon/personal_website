import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Decorative elements */}
      <div className="shape shape-circle shape-1"></div>
      <div className="shape shape-blob shape-2"></div>
      <div className="shape shape-circle shape-3"></div>
      <div className="shape shape-dots"></div>
      
      <div className="hero-overlay"></div>
      <div className="container hero-container" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Your Name</span>
            <span className="hero-subtitle">I build things for the web</span>
          </h1>
          <p className="hero-tagline">Web Developer & Designer with a passion for creating beautiful, functional, and user-centered digital experiences.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#about" className="btn btn-outline">About Me</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-img-container">
            {/* Replace with actual image */}
            <div className="profile-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <div className="orbiting-icon icon-code">
              <i className="fas fa-code"></i>
            </div>
            <div className="orbiting-icon icon-design">
              <i className="fas fa-palette"></i>
            </div>
            <div className="orbiting-icon icon-mobile">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about">
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
