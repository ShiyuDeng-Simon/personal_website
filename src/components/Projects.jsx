import { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('all');
  
  // Example project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Modern Web Application',
      description: 'A responsive web application built with React and Node.js with real-time features and database integration.',
      image: '',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with product catalog, shopping cart, and secure payment processing.',
      image: '',
      category: 'web',
      tags: ['JavaScript', 'Express', 'PayPal API'],
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      description: 'UI/UX design for a fitness tracking mobile application with custom illustrations and animations.',
      image: '',
      category: 'design',
      tags: ['UI/UX', 'Figma', 'Prototyping'],
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Custom-designed portfolio website with modern aesthetics and smooth interactions.',
      image: '',
      category: 'web',
      tags: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      link: '#'
    },
    {
      id: 5,
      title: 'Brand Identity',
      description: 'Complete brand identity including logo design, color palette, typography, and guidelines.',
      image: '',
      category: 'design',
      tags: ['Branding', 'Logo Design', 'Style Guide'],
      link: '#'
    },
    {
      id: 6,
      title: 'API Development',
      description: 'RESTful API development for a content management system with comprehensive documentation.',
      image: '',
      category: 'backend',
      tags: ['API', 'Documentation', 'Backend'],
      link: '#'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            Design
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
        </div>
        
        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <i className={`fas fa-${project.category === 'design' ? 'paint-brush' : 'code'}`}></i>
                  </div>
                )}
                <div className="project-overlay">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
