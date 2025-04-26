import React from 'react';
import '../styles/components/Certificates.css';

const certificates = [
  {
    title: "NPTEL ONLINE CERTIFICATION - Responsible and Safe AI Systems",
    issuer: "NPTEL",
    date: "Jul-Oct 2024",
    id: "NPTEL24CS132S856900415",
    tags: ["AI", "Ethics", "Responsible AI", "Safe AI"]
  },
  {
    title: "Learn to code with AI",
    issuer: "Scrimba / Coursera",
    date: "Nov 2024",
    id: "YJ5UAY4CXL3G",
    link: "https://coursera.org/verify/YJ5UAY4CXL3G",
    tags: ["AI", "Programming", "Scrimba", "Automation"]
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "University of Colorado Boulder",
    date: "Nov 2024",
    id: "BBXVEUQ88WMC",
    link: "https://coursera.org/verify/BBXVEUQ88WMC",
    tags: ["Dynamic Programming", "Greedy Algorithms", "Problem Solving", "Algorithms"]
  },
  {
    title: "Proof of Completion - Introduction to MongoDB for Students",
    issuer: "MongoDB",
    date: "Nov 7, 2024",
    id: "MDB98ox0j55yu",
    tags: ["MongoDB", "Database", "NoSQL"]
  },
  {
    title: "Proof of Completion - MongoDB CRUD Operations: Replace and Delete Documents",
    issuer: "MongoDB",
    date: "Nov 7, 2024",
    id: "MDBoouvgmmnhO",
    tags: ["MongoDB", "CRUD", "Database Management"]
  },
  {
    title: "Data Structures and Algorithms - 84 hours",
    issuer: "Spruce (Hitbullseye.com)",
    date: "June 2024",
    id: "SPRUCEHITBULLDSA",
    tags: ["Data Structures", "Algorithms", "DSA", "Problem Solving"]
  },
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM / Coursera",
    date: "Jan 2024",
    id: "IBMFSWD2025",
    tags: ["Full Stack", "IBM", "Software Development", "Web Development"]
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University / Coursera",
    date: "Nov 2023",
    id: "BNHDMJK4VB7E",
    link: "https://coursera.org/verify/BNHDMJK4VB7E",
    tags: ["HTML", "CSS", "JavaScript", "Frontend Development"]
  },
  {
    title: "Leadership Through Social Influence",
    issuer: "Coursera",
    date: "May 2023",
    id: "KGDDKCA43Y8N",
    tags: ["Leadership", "Team Management", "Social Skills", "Influence"]
  },
  {
    title: "Become a Full-Stack Web Developer",
    issuer: "LinkedIn",
    date: "Feb 2023",
    id: "LINKEDINFSWD",
    tags: ["React", "Node.js", "Next.js", "Full Stack Development"]
  },
  {
    title: "Explore a Career in Front-End Web Development",
    issuer: "LinkedIn Learning",
    date: "Feb 18, 2023",
    id: "AfA9laL2UY8zRfAO79USLJZIy7vV",
    tags: ["Web Development", "Frontend", "User Experience", "Web Design"]
  },
];



const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title">Certifications</h2>
      <p className="certificates-subtitle">Professional credentials that validate my skills and expertise</p>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-issuer">Issued by {cert.issuer}</p>
            <p className="certificate-date">{cert.date}</p>
            <p className="certificate-id">Credential ID: {cert.id}</p>
            {cert.link && <a href={cert.link} className="certificate-link">Show credential →</a>}
            {cert.tags && (
              <div className="certificate-tags">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="certificate-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
