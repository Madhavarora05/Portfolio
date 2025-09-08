import React, { useState, useEffect } from "react";
import '../styles/components/Hero.css';
import profileImage from "../assets/images/profile1.jpg"; // Update with your image path

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const professions = [
      "Engineer.",
      "Full Stack Developer.",
      "Software Developer.",
      "Freelancer."
    ];

    const currentWord = professions[wordIndex];

    // Handle pause after word is complete
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // 1.5 second pause after word is complete

      return () => clearTimeout(pauseTimer);
    }

    // Handle typing and deleting
    const typingTimer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Word is complete, start pause
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % professions.length);
        }
      }
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, wordIndex, isPaused]);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <h2 className="subtitle">Hi, I am</h2>
          <h1 className="title">Madhav Arora</h1>
          <p className="description">
            {/* Developer. Creator. Problem Solver. */}
            Passionate developer crafting modern web experiences and scalable digital solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1193YQcBrN-AqsGgN1lbUK1Xy0lVw1elm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-cv">Check Resume</button>
          </a>
        </div>

        {/* Center Image */}
        <div className="hero-center">
          <div className="image-wrapper">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-right">
          <p>I am a</p>
          <div className="profession-container">
            <h3 className="profession">{displayText}<span className="cursor">|</span></h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
