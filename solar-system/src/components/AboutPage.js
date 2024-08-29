import React from "react";
import EarthBackground from "./EarthBackground"; // Ensure EarthBackground component exists and is correctly implemented
import "./About.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <EarthBackground />
      <div className="skills-button-container">
        <Link to="/skills">
          <button className="skills-button">View My Skills</button>
        </Link>
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I'm a passionate software engineer with a strong foundation in
          programming languages and frameworks. I'm eager to leverage my
          technical expertise and analytical skills to develop impactful
          technology solutions. My educational background demonstrates a
          commitment to excellence, with consistently high GPAs throughout my
          studies.
        </p>
        <div className="personal-info">
          <h2>Personal Info</h2>
          <ul>
            <li>
              <strong>Birthdate:</strong> 01/26/2002
            </li>
            <li>
              <strong>Email:</strong> pranavsingh9471@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9955388960
            </li>
            <li>
              <strong>Address:</strong> Bangalore, India
            </li>
          </ul>
        </div>
        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>2022 - Present</strong>
              <br />
              Master's of Computer Applications, PES University, Bangalore
              <br />
              CGPA 7.5/10
            </li>
            <li>
              <strong>2019 - 2022</strong>
              <br />
              Bachelor's of Computer Applications, IIMT College of Management,
              Greater Noida
              <br />
              CGPA 7.0/10
            </li>
            <li>
              <strong>2017 - 2019</strong>
              <br />
              High School Degree, D.A.V Public School, Bokaro
              <br />
              Percentage: 83/100
            </li>
            <li>
              <strong>2017</strong>
              <br />
              Secondary School, St. Xavier's School, Saharsa
              <br />
              CGPA 8.2/10
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h2>Connect with Me</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/pranav-singh-539239223/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Pranav-Singh-2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pranavsingh947"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
