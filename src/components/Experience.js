import React from 'react';
import '../styles/components/Experience.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title"><span>Education & Experience</span></h2>
        <p className="section-description">
          My academic journey and professional career that have shaped my skills and expertise.
        </p>

        <div className="timeline-container">
          <div className="timeline-column education-column">
            <h3 className="column-title">Education</h3>
            
            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Since Aug 2022</div>
                <h4 className="timeline-title">
                  <FaGraduationCap className="timeline-icon" />
                  Bachelor of Technology - BTech in Computer Science
                </h4>
                <h5 className="timeline-subtitle">Lovely Professional University, Punjab, India</h5>
                <div className="timeline-grade">CGPA: 8.26</div>
                <p className="timeline-description">
                  Currently pursuing a Bachelor's degree with courses in Data Structures, Algorithms, 
                  Object-Oriented Programming, Database Management Systems, and Operating Systems.
                </p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Apr 2021 - Jul 2022</div>
                <h4 className="timeline-title">
                  <FaGraduationCap className="timeline-icon" />
                  CBSE (XII), PCM with Computer Science
                </h4>
                <h5 className="timeline-subtitle">Apeejay School, Mahavir Marg, Jalandhar, India</h5>
                <div className="timeline-grade">Grade: 89.2%</div>
                <p className="timeline-description">
                  Completed Class 12th High school education where I studied Physics, Chemistry & Math with Computer Science.
                </p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Apr 2019 - Mar 2020</div>
                <h4 className="timeline-title">
                  <FaGraduationCap className="timeline-icon" />
                  CBSE (X), Standard Mathematics with Computer Science
                </h4>
                <h5 className="timeline-subtitle">Apeejay School, Mahavir Marg, Jalandhar, India</h5>
                <div className="timeline-grade">Grade: 90.2%</div>
                <p className="timeline-description">
                  Completed Class 10th education with focus on Mathematics and Computer Science.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-column experience-column">
            <h3 className="column-title">Experience</h3>
            
            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">May 2023 - Present</div>
                <h4 className="timeline-title">
                  <FaBriefcase className="timeline-icon" />
                  Freelance Software Developer
                </h4>
                <h5 className="timeline-subtitle">Self-employed</h5>
                <p className="timeline-description">
                  Providing custom software development solutions for various clients with a focus on 
                  web applications and responsive design. Delivering high-quality work while managing 
                  client relationships and project timelines independently.
                </p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Feb 2024 - Present</div>
                <h4 className="timeline-title">
                  <FaBriefcase className="timeline-icon" />
                  AI Intern
                </h4>
                <h5 className="timeline-subtitle">Outlier · Part-time · Remote</h5>
                <p className="timeline-description">
                  Training and fine-tuning artificial intelligence models to improve performance and accuracy.
                  Collaborating with a distributed team to implement AI solutions for various applications.
                  Working remotely while maintaining strong communication and project management skills.
                </p>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">June 2024 - Jul 2024</div>
                <h4 className="timeline-title">
                  <FaBriefcase className="timeline-icon" />
                  Data Structures and Algorithms Trainee
                </h4>
                <h5 className="timeline-subtitle">SPRUCE & Hitbullseye</h5>
                <p className="timeline-description">
                  Completed an intensive 84-hour training program focused on Data Structures and Algorithms.
                  Gained hands-on experience with problem-solving techniques, algorithmic optimizations, and 
                  data structure implementations. Applied theoretical concepts to real-world coding challenges, 
                  improving efficiency and problem-solving speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;