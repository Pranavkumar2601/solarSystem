// src/components/Skills.js
import React from "react";
import "./Skills.css";

const skillsData = [
  { title: "HTML & CSS3", level: 90 },
  { title: "JavaScript", level: 85 },
  { title: "Python", level: 80 },
  { title: "SQL", level: 75 },
  { title: "Java", level: 70 },
  { title: "Machine Learning", level: 60 },
  { title: "Angular", level: 70 },
  { title: "Bootstrap", level: 80 },
  { title: "AWS", level: 65 },
];

const Skills = () => {
  return (
    <div className="skills">
      <header>
        <h1>Skills</h1>
      </header>
      <main>
        <p>Here are some of the skills I've acquired:</p>
        <div className="skills-container">
          {skillsData.map((skill) => (
            <div className="skill" key={skill.title}>
              <div className="skill-title">{skill.title}</div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p>{skill.level}%</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>© 2024 Pranav Kumar</p>
      </footer>
    </div>
  );
};

export default Skills;
