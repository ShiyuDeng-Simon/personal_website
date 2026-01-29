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
            <i className={`fas fa-${project.icon || 'code'}`}></i>
          </div>
        )}
        <div className="project-overlay">
          {project.github && (
            <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
          {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
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

  // Projects data from resume
  const projects = [
    {
      id: 1,
      title: 'Healthcare Communication App',
      description: 'Built a healthcare app leveraging Local LLM to assist patients with pre-visit preparation, real-time session transcription, and post-session summaries for improved doctor-patient communication.',
      image: '',
      icon: 'heartbeat',
      category: 'hackathon',
      tags: ['React Native', 'Local LLM', 'Healthcare'],
      github: 'https://github.com/ShiyuDeng-Simon',
      link: '#'
    },
    {
      id: 2,
      title: 'Food Waste Reduction App',
      description: 'Developed a React Native mobile app designed to streamline meal preparation and reduce food waste by analyzing fridge contents with Google Vision and suggesting recipes using Google Gemini API.',
      image: '',
      icon: 'utensils',
      category: 'hackathon',
      tags: ['React Native', 'Google Vision', 'Google Gemini API'],
      github: 'https://github.com/ShiyuDeng-Simon',
      link: '#'
    },
    {
      id: 3,
      title: 'Relocation Platform',
      description: 'Conceptualized and developed "Echomove", a website designed to simplify intern relocations by providing a safe platform for users to swap homes during intern period.',
      image: '',
      icon: 'home',
      category: 'hackathon',
      tags: ['JavaScript', 'Docker', 'React'],
      github: 'https://github.com/ShiyuDeng-Simon',
      link: '#'
    },
    {
      id: 4,
      title: 'Project Collaboration App',
      description: 'Developed a full-stack website enabling task creation, tracking, and management within projects, offering team member invitations, commenting, poll/vote, and meetup scheduling for effective teamwork.',
      image: '',
      icon: 'tasks',
      category: 'web',
      tags: ['JavaScript', 'Docker', 'React', 'SQL', 'Express'],
      github: 'https://github.com/ShiyuDeng-Simon',
      link: '#'
    },
    {
      id: 5,
      title: 'AI Coding Tool',
      description: 'Built an internal AI coding tool, leveraging an MCP server with custom workflows and function calls, and adopted across multiple teams to accelerate automation test development.',
      image: '',
      icon: 'robot',
      category: 'work',
      tags: ['Python', 'AI', 'Automation', 'MCP Server'],
      link: '#'
    },
    {
      id: 6,
      title: 'Performance Testing Framework',
      description: 'Automated performance testing of web features by developing Lua scripts and using wrk for validation, stability, and scalability while monitoring resource usage in Grafana.',
      image: '',
      icon: 'chart-line',
      category: 'work',
      tags: ['Lua', 'Performance Testing', 'Grafana', 'Automation'],
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
        <p className="section-subtitle">Showcasing my work in software development</p>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'hackathon' ? 'active' : ''}`}
            onClick={() => setFilter('hackathon')}
          >
            Hackathons
          </button>
          <button
            className={`filter-btn ${filter === 'work' ? 'active' : ''}`}
            onClick={() => setFilter('work')}
          >
            Work Projects
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps
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
