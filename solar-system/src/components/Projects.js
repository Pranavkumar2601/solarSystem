// src/components/Projects.js
import React, { useEffect, useRef } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Beyond The Boundary (Machine Learning)",
    description:
      "Focused on using Machine Learning to predict cricket player performance and recommend substitutions during matches.",
    keyElements: [
      "Data Collection and Preprocessing",
      "Machine Learning Model Development",
      "Real-time Recommendations",
      "User-Friendly Interface",
      "Deployment on AWS EC2",
    ],
    link: "https://your-project-link.com/machine-learning",
  },
  {
    title: "E-Commerce (Angular)",
    description: "Built an e-commerce website using the Angular framework.",
    keyElements: [
      "Product Listing and Browsing",
      "Content Routing",
      "Shopping Cart",
      "Checkout Process",
    ],
    link: "https://your-project-link.com/e-commerce",
  },
  {
    title: "Portfolio Website (HTML, CSS, Bootstrap)",
    description:
      "Designed and developed a personal portfolio website to showcase my skills, projects, and professional background.",
    keyElements: [
      "Responsive Design Using Bootstrap",
      "Custom Styling with CSS",
      "Content Sections for Projects, Skills, and Contact Information",
      "Interactive Elements and Smooth Transitions",
      "Deployment on GitHub Pages",
    ],
    link: "https://your-project-link.com/portfolio",
  },
];

const Projects = () => {
  const handleProjectClick = (link, event) => {
    event.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="projects">
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <h3>Key Elements:</h3>
              <ul>
                {project.keyElements.map((element, i) => (
                  <li key={i}>{element}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleProjectClick(project.link, e)}
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
