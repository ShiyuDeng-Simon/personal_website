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
            <span className="hero-name">Shiyu (Simon) Deng</span>
            <span className="hero-subtitle">Software Engineer & CS Student</span>
          </h1>
          <p className="hero-tagline">4th year Computer Science student at UBC with a passion for building innovative software solutions and automation tools.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#about" className="btn btn-outline">About Me</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/ShiyuDeng-Simon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/simon-deng-sy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-img-container">
            <img src="/images/simon-profile.jpg" alt="Shiyu (Simon) Deng" className="profile-img" />
            <div className="orbiting-icon icon-code">
              <i className="fas fa-code"></i>
            </div>
            <div className="orbiting-icon icon-design">
              <i className="fas fa-laptop-code"></i>
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
