import React from 'react';
import '../styles/components/Skills.css';

const Skills = () => {
  const skillsData = {
    languages: [
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'code' },
      { name: 'Python', icon: 'python' },
      { name: 'C', icon: 'code' }
    ],
    frontend: [
      { name: 'React JS', icon: 'react' },
      { name: 'Angular JS', icon: 'angular' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Next JS', icon: 'next' },
      { name: 'Responsive Web Design', icon: 'mobile-alt' }
    ],
    backend: [
      { name: 'Node JS', icon: 'node' },
      { name: 'Express JS', icon: 'node-js' },
      { name: 'Java', icon: 'java' },
      { name: 'MySQL', icon: 'database' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'database' },
      { name: 'NoSQL', icon: 'database' },
      { name: 'Laravel', icon: 'laravel' }
    ],
    others: [
      { name: 'Data Structures and Algorithms', icon: 'sitemap' },
      { name: 'Problem-Solving', icon: 'puzzle-piece' },
      { name: 'Git', icon: 'git-alt' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Netlify', icon: 'server' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Amazon Web Services', icon: 'aws' },
    ]
  };

  // Map of skill icon classes
  const iconMap = {
    code: 'fa-code',
    java: 'fa-java',
    python: 'fa-python',
    react: 'fa-react',
    angular: 'fa-angular',
    tailwind: 'fa-wind',
    html: 'fa-html5',
    css: 'fa-css3-alt',
    javascript: 'fa-js',
    bootstrap: 'fa-bootstrap',
    'material-ui': 'fa-m',
    next: 'fa-n',
    'mobile-alt': 'fa-mobile-alt',
    node: 'fa-node',
    'node-js': 'fa-node-js',
    database: 'fa-database',
    postgresql: 'fa-database',
    django: 'fa-python',
    flask: 'fa-flask',
    laravel: 'fa-laravel',
    sitemap: 'fa-sitemap',
    'puzzle-piece': 'fa-puzzle-piece',
    'git-alt': 'fa-git-alt',
    github: 'fa-github',
    server: 'fa-server',
    figma: 'fa-figma',
    docker: 'fa-docker',
    'file-word': 'fa-file-word',
    aws: 'fa-aws',
    terminal: 'fa-terminal'
  };

  // Function to get the appropriate icon class
  const getIconClass = (iconName) => {
    // For Font Awesome 6, some icons use 'fa-brands' (fab) and others use 'fa-solid' (fas)
    const brandIcons = ['react', 'angular', 'node-js', 'git-alt', 'github', 'aws', 'java', 'python', 'html', 'css', 'js', 'bootstrap'];
    const prefix = brandIcons.includes(iconName) ? 'fab' : 'fas';
    return `${prefix} ${iconMap[iconName] || 'fa-code'}`;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-description">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p>

        <div className="skills-container">
          {/* Languages */}
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-badges">
              {skillsData.languages.map((skill, index) => (
                <div className="skill-badge" key={index}>
                  <i className={`skill-icon ${getIconClass(skill.icon)}`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-badges">
              {skillsData.frontend.map((skill, index) => (
                <div className="skill-badge" key={index}>
                  <i className={`skill-icon ${getIconClass(skill.icon)}`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-badges">
              {skillsData.backend.map((skill, index) => (
                <div className="skill-badge" key={index}>
                  <i className={`skill-icon ${getIconClass(skill.icon)}`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Skills */}
          <div className="skill-category">
            <h3>Others</h3>
            <div className="skill-badges">
              {skillsData.others.map((skill, index) => (
                <div className="skill-badge" key={index}>
                  <i className={`skill-icon ${getIconClass(skill.icon)}`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;