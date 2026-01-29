import { useEffect, useRef, useState } from 'react';
import '../styles/About.css';
import dwave_logo from '../assets/dwave_logo.png';
import datavisor_logo from '../assets/datavisor_logo.png';
import ubc_logo from '../assets/ubc-logo.png';

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

  // Work Experience Data
  const experiences = [
    {
      company: 'D-wave Quantum Inc.',
      role: 'Software Developer in Test Co-op',
      period: 'Jan 2026 - present',
      description: 'Contributed to the testing of D-wave\'s quantum cloud service platform. Designed test plan and test scenerio for new generation admin page Developed and maintained test automation frameworks to ensure high-quality software releases.',
      technologies: ['Python', 'Playwright', 'Jenkins', 'argocd', 'Qase'],
      logo: dwave_logo
    },
    {
      company: 'Datavisor',
      role: 'Software Engineer Intern',
      period: 'April 2025 - Dec 2025',
      description: 'Developed and implemented end-to-end automation test suites for new features. Built an internal AI coding tool and automated performance testing of web features. Performed backword compatibility testing before major releases to ensure compatibility between services with different versions.',
      technologies: ['Java', 'Selenium', 'Kubernetes', 'Linux', 'wrk', 'Grafana'],
      logo: datavisor_logo
    },
    {
      company: 'Cosmio Technology',
      role: 'Full Stack Developer',
      period: 'Jun 2024 - Dec 2024',
      description: 'Developed full-stack web applications for clients, focusing on responsive design and seamless user experiences. Collaborated with design teams to implement modern UI/UX.',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      logo: 'CT'
    },
    {
      company: 'UBC Computer Science',
      role: 'Undergraduate Student',
      period: 'Sept 2022 - Present',
      description: 'Currently pursuing a Bachelor of Science in Computer Science with a strong foundation in software engineering, algorithms, and data structures.',
      technologies: ['Java', 'Python', 'Algorithms', 'Data Structures', 'Computer Networks', 'Software Engineering'],
      logo: ubc_logo
    }
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
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <div className="terminal-title">simon.js</div>
              </div>
              <div className="terminal-content">
                <div className="code-line">
                  <span className="keyword">const </span> <span className="variable">simon</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="property">role</span>: <span className="string">'SWE'</span>,
                </div>
                <div className="code-line indent">
                  <span className="property">passions</span>: <span className="bracket">[</span>
                </div>
                <div className="code-line double-indent">
                  <span className="string">'Full Stack Development'</span>,
                </div>
                <div className="code-line double-indent">
                  <span className="string">'LLM Integration'</span>,
                </div>
                <div className="code-line double-indent">
                  <span className="string">'Automation'</span>
                </div>
                <div className="code-line indent">
                  <span className="bracket">]</span>,
                </div>

                <div className="code-line indent">
                  <span className="property">status</span>: <span className="string">'Building...'</span>,
                </div>
                <div className="code-line indent">
                  <span className="property">hobbies</span>: <span className="bracket">[</span>
                </div>
                <div className="code-line double-indent">
                  <span className="string">'Pickball'</span>,
                </div>
                <div className="code-line double-indent">
                  <span className="string">'Traveling'</span>,
                </div>
                <div className="code-line double-indent">
                  <span className="string">'Exploring Food'</span>
                </div>
                <div className="code-line indent">
                  <span className="bracket">]</span>,
                </div>
                <div className="code-line">
                  <span className="bracket">{'}'}</span>;
                </div>
                <div className="code-line typing-cursor">_</div>
              </div>
            </div>
            <div className="experience-badge">
              <span className="years">UBC</span>
              <span className="text">Computer<br />Science</span>
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
                My professional journey has taken me through various roles in software engineering and testing,
                from cloud quantum computing platform to AI-driven fraud detection software that process trillions of real-time data points. I thrive on solving complex problems
                and building efficient, scalable applications.
              </p>
              {/* <p>
                I'm particularly interested in web development, mobile app design, and machine learning applications.
                Through hackathons and personal projects, I've developed solutions ranging from healthcare applications to
                real estate platforms.
              </p> */}
            </div>

            <div className="about-numbers">
              <div className="number-item">
                <span className="number">3+</span>
                <span className="number-text">Years of<br />Experience</span>
              </div>
              <div className="number-item">
                <span className="number">4+</span>
                <span className="number-text">Major<br />Projects</span>
              </div>
              <div className="number-item">
                <span className="number">3</span>
                <span className="number-text">Hackathon<br />Awards</span>
              </div>
            </div>

            <div className="about-cta">
              <a href="#projects" className="btn">View My Projects</a>
              <a href="https://github.com/ShiyuDeng-Simon" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Profile</a>
            </div>
          </div>

          <div className="experience-container">
            <h4 className="experience-heading">Work Experience</h4>
            <div className="experience-cards">
              {experiences.map((exp, index) => (
                <div className="experience-card" key={index} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="experience-header">
                    {typeof exp.logo === 'string' && exp.logo.length <= 3 ? (
                      <div className="company-logo-placeholder">{exp.logo}</div>
                    ) : (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                    )}
                    <div className="experience-title-block">
                      <h5 className="experience-company">{exp.company}</h5>
                      <div className="experience-role">{exp.role}</div>
                    </div>
                    <div className="experience-period">{exp.period}</div>
                  </div>
                  <p className="experience-desc">{exp.description}</p>
                  <div className="experience-tech">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
