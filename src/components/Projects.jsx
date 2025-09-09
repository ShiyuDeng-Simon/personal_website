import { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };
  
  return (
    <div 
      className="project-card" 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [visible, setVisible] = useState(false);
  
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
          setVisible(true);
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
      {/* Decorative elements */}
      <div className="shape shape-circle shape-1"></div>
      <div className="shape shape-blob shape-2"></div>
      
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
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
        
        <div className={`projects-grid ${visible ? 'visible' : ''}`} ref={projectsRef}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
