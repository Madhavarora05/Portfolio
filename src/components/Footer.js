import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    { name: 'Facebook', icon: 'fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=100008361128715' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', link: 'https://www.linkedin.com/in/madhavarora05/' },
    { name: 'Instagram', icon: 'fa-instagram', link: 'https://www.instagram.com/aroramadhav_/' },
    { name: 'GitHub', icon: 'fa-github', link: 'https://github.com/Madhavarora05' },
    {
      name: 'LeetCode',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
      link: 'https://leetcode.com/u/Madhav-Arora/'
    }
  ];



  const navLinks = [
    { name: 'About', link: '#about' },
    { name: 'Experience', link: '#experience' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Certificates', link: '#certificates' },
    { name: 'Contact', link: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-name">
          <h2>Madhav Arora</h2>
          <hr className="footer-divider" />
        </div>

        <div className="footer-nav">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="social-links">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              {item.image ? (
                <img src={item.image} alt={item.name} className="leetcode-img" />
              ) : (
                <i className={`fab ${item.icon}`}></i>
              )}

            </a>
          ))}
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} Madhav Arora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
