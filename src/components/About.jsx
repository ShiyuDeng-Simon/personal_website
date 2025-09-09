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
    { name: 'HTML', proficiency: 90 },
    { name: 'CSS', proficiency: 85 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React', proficiency: 75 },
    { name: 'Node.js', proficiency: 70 },
    { name: 'UI/UX Design', proficiency: 80 },
    { name: 'Responsive Design', proficiency: 85 },
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
              {/* Replace with actual image */}
              <div className="about-placeholder">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
            <div className="about-image-backdrop"></div>
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="text">Years<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-details">
            <div className="about-text">
              <h3 className="about-heading">Hello, I'm <span className="highlight">Your Name</span></h3>
              <p className="about-lead">
                I'm a passionate web developer and designer based in [Your Location]. 
                With a strong focus on creating clean, user-friendly experiences, 
                I combine technical skills with creative problem-solving.
              </p>
              <p>
                My journey in web development began [brief background story]. Since then,
                I've worked on a variety of projects that have allowed me to refine my skills in
                frontend and backend technologies. I'm particularly interested in
                [your specific interests or specialties].
              </p>
              <p>
                When I'm not coding, you can find me [your hobbies or interests].
                I believe that these diverse interests contribute to my creative approach to problem-solving.
              </p>
            </div>
            
            <div className="skills-container">
              <h4 className="skills-heading">My Skills</h4>
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
                <span className="number">50+</span>
                <span className="number-text">Projects<br/>Completed</span>
              </div>
              <div className="number-item">
                <span className="number">30+</span>
                <span className="number-text">Happy<br/>Clients</span>
              </div>
              <div className="number-item">
                <span className="number">100+</span>
                <span className="number-text">Coffee<br/>Consumed</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#projects" className="btn">View My Projects</a>
              <a href="#" className="btn btn-outline">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
