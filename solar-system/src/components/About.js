import React, { useEffect, useRef } from "react";
import "./About.css"; // Ensure this CSS file is in the same directory

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to the content section when the component mounts
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="about-section">
      <div className="profile-container" ref={contentRef}>
        <h1>Who am I?</h1>
        <p className="tagline">
          A passionate software engineer with a strong foundation in programming
          languages and frameworks. I'm eager to leverage my technical expertise
          and analytical skills to develop impactful technology solutions. My
          educational background demonstrates a commitment to excellence, with
          consistently high GPAs throughout my studies.
        </p>

        <div className="profile-content">
          <div className="about">
            <h2>About Me</h2>
            <p>
              My educational background demonstrates a commitment to
              excellence...
            </p>
          </div>

          <div className="details">
            <h2>Personal Info</h2>
            <p>
              <strong>Birthdate:</strong> 01/26/2002
            </p>
            <p>
              <strong>Email:</strong> pranavsingh9471@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> + (91) 9955388960
            </p>
            <p>
              <strong>Address:</strong> Bangalore, India
            </p>

            <h2>Education</h2>
            <p>
              <strong>2022 - Present</strong> Master's of Computer Applications,
              PES University, Bangalore. CGPA 7.5/10
            </p>
            <p>
              <strong>2019 - 2022</strong> Bachelor's of Computer Applications,
              IIMT College of Management, Greater Noida. CGPA 7.0/10
            </p>
            <p>
              <strong>2017 - 2019</strong> High School Degree, D.A.V Public
              School, Bokaro. Percentage: 83/100
            </p>
            <p>
              <strong>2017</strong> Secondary School, St. Xavier's School,
              Saharsa. CGPA 8.2/10
            </p>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:pranavsingh9471@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
};

export default About;
