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
      <div className="hero-overlay"></div>
      <div className="container hero-container" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Your Name</span>
          </h1>
          <p className="hero-tagline">Web Developer & Designer</p>
          <div className="hero-cta">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#about" className="btn btn-outline">About Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-img-container">
            {/* Replace with actual image */}
            <div className="profile-placeholder">
              <i className="fas fa-user"></i>
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
