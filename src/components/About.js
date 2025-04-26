import React from 'react';
import '../styles/components/About.css';

const About = () => {
  const personalInfo = [
    { label: 'Full Name', value: 'Madhav Arora' },
    { label: 'Age', value: '20 year' },
    { label: 'Language', value: 'English, Hindi, Punjabi' },
    { label: 'Phone No', value: '+917814327880' },
    { label: 'Email', value: 'madhavarora365@gmail.com' },
    { label: 'Address', value: 'Durga Colony, Jalandhar, Punjab' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-content">
          <div className="about-tagline">
          <h2>Learning, building, & evolving — one project at a time.</h2>
          </div>

          <div className="about-description">
            <p>
              Developer by day, tech explorer by night — I love creating beautiful, functional web applications that blend design and performance. Every line of code I write is backed by a goal to simplify, automate, or enhance an experience. I bring curiosity, persistence, and a growth mindset to every project I take on.
            </p>
            <p>
              Currently pursuing my academic journey while building real-world projects, I'm always looking to learn, improve, and innovate in the ever-evolving tech space.
            </p>

          </div>

          <div className="personal-info">
            {personalInfo.map((info, index) => (
              <div className="info-item" key={index}>
                <span className="info-label">{info.label}</span>
                <span className="info-colon">:</span>
                <span className="info-value">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;