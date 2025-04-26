import React, { useState } from 'react';
import '../styles/components/Projects.css';
import WeatherImage from '../assets/projects/Weather.png';
import SustainNestImg from '../assets/projects/Sustain.png';
import QuestImg from '../assets/projects/Quest.png';
import BeetchImg from '../assets/projects/beetch.png';
import sudukoImg from '../assets/projects/Suduko.png';
import TruImg from '../assets/projects/TruImg.png';
import SJFImg from '../assets/projects/sjf.jpeg';
import EasyImg from '../assets/projects/Easy.png';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      category: 'Simple Projects',
      description: 'A responsive and user-friendly weather dashboard that provides real-time weather updates based on user input. It uses the OpenWeatherMap API to fetch current weather conditions, 5-day forecasts, and other relevant weather data. Built with React.js, it includes features like search history, temperature unit toggle, and dynamic UI updates.',
      image: WeatherImage,
      date: 'APR 2025',
      client: 'Company Interview Assessment',
      tech: 'React.js, OpenWeatherMap API, JavaScript, CSS',
      type: 'Weather Application',
      url: 'https://github.com/Madhavarora05/Weather_Dashboard',
      github: 'Weather_Dashboard',
      categories: ['all', 'simple']
    },
    {
      title: 'Quest Search',
      category: 'Simple Projects',
      description: 'Quest Search is a full-stack search engine platform developed for a company interview assessment. It allows users to search for questions from a MongoDB database using efficient filtering and pagination. The frontend is built using React, while the backend is powered by Node.js and gRPC, ensuring smooth data communication and optimized performance.',
      image: QuestImg,
      date: 'APR 2025',
      client: 'Company Interview Assessment',
      tech: 'React, Node.js, MongoDB, gRPC',
      type: 'Search Engine Platform',
      url: 'https://github.com/Madhavarora05/Quest_Search',
      github: 'Quest_Search',
      categories: ['all', 'simple']
    },
    {
      title: 'Truneeds',
      category: 'Full Stack',
      description: 'Truneeds is a backend system for an e-commerce platform developed using Node.js and Express. It includes user authentication, product management, cart functionality, and secure order placement. Integrated with MongoDB for data storage and Bootstrap for admin UI elements, it\'s designed for a department store aiming to digitize their operations.',
      image: TruImg,
      date: 'APR - JUN 2024',
      client: 'Department Store',
      tech: 'Node.js, MongoDB, HTML, Bootstrap',
      type: 'E-commerce Backend',
      url: 'https://github.com/Madhavarora05/TruNeeds-EcommerceWebsite',
      github: 'TruNeeds-EcommerceWebsite',
      categories: ['all', 'fullstack']
    },
    {
      title: 'Beetch-FKS',
      category: 'Full Stack',
      description: 'Beetch-FKS is a full-featured fashion e-commerce website developed using the MERN stack. The project includes user registration/login, product listings with filters, a shopping cart, checkout system, and order history. Designed with a modern UI, it showcases a complete frontend-backend integration suited for real-world online retail businesses.',
      image: BeetchImg,
      date: 'SEP - NOV 2024',
      client: 'Online Clothing Brand',
      tech: 'MERN Stack',
      type: 'E-commerce Website',
      url: 'https://github.com/Madhavarora05/Beetch-Fks', // Updated with proper GitHub URL
      github: 'Beetch-Fks',
      categories: ['all', 'fullstack']
    },
    {
      title: 'SustainNest',
      category: 'PHP Projects',
      description: 'SustainNest is a feature-rich blogging platform designed to promote sustainability. Developed in PHP with MySQL, it allows users to read, write, and interact with blogs on eco-friendly practices. Features include a like system, comments, user login, image uploads, and admin moderation. The project also includes community project listings and educational content.',
      image: SustainNestImg,
      date: 'JAN - MAR 2024',
      client: 'NGO',
      tech: 'PHP, JavaScript, MySQL',
      type: 'Blogging Platform',
      url: 'https://github.com/Madhavarora05/SustainNest', // Updated with proper GitHub URL
      github: 'SustainNest',
      categories: ['all', 'php']
    },
    {
      title: 'Sudoku Solver Visualiser',
      category: 'Programming Projects',
      description: 'A desktop-based Java application that visualizes the step-by-step solution of a Sudoku puzzle. Built using Swing for the GUI, the project demonstrates backtracking algorithms in action. Users can input custom puzzles or solve a default board, making it an interactive way to learn about algorithmic problem solving.',
      image: sudukoImg,
      date: 'DEC 2023',
      client: 'Personal Project',
      tech: 'Java, Swing',
      type: 'Puzzle Solver',
      url: 'https://github.com/Madhavarora05/Sudoku-Solver-Visualiser',
      github: 'Sudoku-Solver-Visualiser',
      categories: ['all', 'programming']
    },
    {
      title: 'SJF CPU Scheduling',
      category: 'Programming Projects',
      description: 'This project simulates the Shortest Job First (SJF) CPU scheduling algorithm using the C programming language. It calculates waiting and turnaround times for a given set of processes and displays the Gantt chart output. Created as part of an operating systems assignment to understand process scheduling mechanisms.',
      image: SJFImg,
      date: 'NOV 2023',
      client: 'Academic Exercise',
      tech: 'C',
      type: 'Operating Systems Simulation',
      url: 'https://github.com/Madhavarora05/SJF-CPU-SCHEDULING',
      github: 'SJF-CPU-SCHEDULING',
      categories: ['all', 'programming']
    },
    {
      title: 'EasyWheels',
      category: 'Frontend Development',
      description: 'EasyWheels is a frontend prototype for a car rental platform built using AngularJS. It features a clean UI with car listing, booking forms, filters by car type or brand, and a responsive design. The project highlights client-side form validations, component-based architecture, and use of Bootstrap for UI enhancement.',
      image: EasyImg,
      date: 'JUL - SEP 2023',
      client: 'Academic Project',
      tech: 'AngularJS, Bootstrap',
      type: 'Car Rental Platform',
      url: 'https://github.com/Madhavarora05/EASYWHEELS_CAR_RENTAL',
      github: 'EasyWheels',
      categories: ['all']
    }
  ];


  const [filter, setFilter] = useState('all');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'simple', label: 'Simple Projects' },
    { value: 'php', label: 'PHP Projects' },
    { value: 'programming', label: 'Programming Projects' }
  ];

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(filter)
  );

  // Helper function to check if a URL is valid
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Function to get proper GitHub URL for the project
  const getGitHubUrl = (project) => {
    if (isValidUrl(project.url) && project.url.includes('github.com')) {
      return project.url;
    }
    // Fallback to a constructed GitHub URL if needed
    return `https://github.com/Madhavarora05/${project.github}`;
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title"><span>Projects</span></h2>

        <div className="project-filters">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`filter-btn ${filter === option.value ? 'active' : ''}`}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedDescriptions[index];
            const description = isExpanded
              ? project.description
              : `${project.description.substring(0, 150)}...`;

            return (
              <div
                className="project-card"
                key={index}
                onClick={() => openProjectModal(project)}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
                <div className="project-description">
                  <p>
                    {description}
                    <span
                      className="read-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDescription(index);
                      }}
                    >
                      {isExpanded ? ' Read less' : ' Read more'}
                    </span>
                  </p>
                </div>
                <div className="project-content">
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="project-details">
                    <div className="project-detail">
                      <span className="detail-label">Date :</span>
                      <span className="detail-value">{project.date}</span>
                    </div>
                    <div className="project-detail">
                      <span className="detail-label">Client :</span>
                      <span className="detail-value">{project.client}</span>
                    </div>
                    <div className="project-detail">
                      <span className="detail-label">Tech :</span>
                      <span className="detail-value">{project.tech}</span>
                    </div>
                    <div className="project-detail">
                      <span className="detail-label">Type :</span>
                      <span className="detail-value">{project.type}</span>
                    </div>
                    <div className="project-detail">
                      <span className="detail-label">GitHub :</span>
                      <span
                        className="detail-value github-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={getGitHubUrl(project)} target="_blank" rel="noopener noreferrer">
                          {project.github}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="project-modal-overlay">
          <div className="project-modal">
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="close-modal" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>
              <div className="modal-description">
                <p>{selectedProject.description}</p>
                <div className="project-date">
                  <span className="detail-label">Date:</span> {selectedProject.date}
                </div>
              </div>
              <div className="modal-details">
                <div className="project-detail">
                  <span className="detail-label">Client:</span>
                  <span className="detail-value">{selectedProject.client}</span>
                </div>
                <div className="project-detail">
                  <span className="detail-label">Tech:</span>
                  <span className="detail-value">{selectedProject.tech}</span>
                </div>
                <div className="project-detail">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{selectedProject.type}</span>
                </div>
              </div>
              <div className="modal-actions">
                <a
                  className="view-code-btn"
                  href={getGitHubUrl(selectedProject)} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <button
                  className="view-live-btn"
                  onClick={() => alert('No live link available')}
                >
                  View Live
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;