import { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" ref={aboutRef}>
          <div className="about-image">
            <div className="about-image-container">
              {/* Replace with actual image */}
              <div className="about-placeholder">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Hello, I'm <span className="highlight">Your Name</span></h3>
            <p>
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
            <div className="skills">
              <h4>My Skills</h4>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Responsive Design</span>
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
