import { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.15 });
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Skills with proficiency levels
  const skills = [
    { name: 'React/React Native', proficiency: 90 },
    { name: 'JavaScript/TypeScript', proficiency: 90 },
    { name: 'Python', proficiency: 85 },
    { name: 'Java', proficiency: 80 },
    { name: 'C/C++', proficiency: 75 },
    { name: 'HTML/CSS', proficiency: 85 },
    { name: 'SQL/NoSQL', proficiency: 80 },
  ];

  return (
    <section id="about" className="about">
      {/* Decorative elements */}
      <div className="shape shape-circle shape-1" style={{ transform: `translateY(${offsetY * 0.2}px)` }}></div>
      <div className="shape shape-blob shape-2" style={{ transform: `translateY(${offsetY * -0.1}px)` }}></div>
      <div className="shape shape-dots" style={{ transform: `translateY(${offsetY * 0.15}px)` }}></div>
      
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={`about-content ${isVisible ? 'visible' : ''}`} ref={aboutRef}>
          <div className="about-image-container">
            <div className="about-image">
              <div className="about-placeholder">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
            <div className="about-image-backdrop"></div>
            <div className="experience-badge">
              <span className="years">UBC</span>
              <span className="text">Computer<br/>Science</span>
            </div>
          </div>
          
          <div className="about-details">
            <div className="about-text">
              <h3 className="about-heading">Hello, I'm <span className="highlight">Shiyu (Simon) Deng</span></h3>
              <p className="about-lead">
                I'm a Computer Science student at the University of British Columbia with a passion for 
                software engineering and web development.
              </p>
              <p>
                Currently working as a Software Engineer at Datavisor, I've been developing and implementing 
                end-to-end automation test suites for new features. My experience includes building an internal AI coding tool, 
                automating performance testing of web features, and improving system performance.
              </p>
              <p>
                I'm particularly interested in web development, mobile app design, and machine learning applications. 
                Through hackathons and personal projects, I've developed solutions ranging from healthcare applications to 
                real estate platforms.
              </p>
            </div>
            
            <div className="skills-container">
              <h4 className="skills-heading">Technical Skills</h4>
              <div className="skill-bars">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          transitionDelay: `${0.3 + index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-numbers">
              <div className="number-item">
                <span className="number">3+</span>
                <span className="number-text">Years of<br/>Experience</span>
              </div>
              <div className="number-item">
                <span className="number">4+</span>
                <span className="number-text">Major<br/>Projects</span>
              </div>
              <div className="number-item">
                <span className="number">3</span>
                <span className="number-text">Hackathon<br/>Awards</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#projects" className="btn">View My Projects</a>
              <a href="https://github.com/ShiyuDeng-Simon" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
