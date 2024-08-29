import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Skills.css";
import MarsBackground from "./MarsBakground";

const SkillBar = ({ skill, percentage }) => (
  <div className="skill">
    <b>{skill}</b>
    <span>{percentage}%</span>
    <div>
      <span style={{ width: `${percentage}%` }}></span>
    </div>
  </div>
);

const CircularProgress = ({ skill, percentage }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.background = `
        radial-gradient(closest-side, black 80%, transparent 0 99.9%, black 0),
        conic-gradient(#ffbf35 ${percentage}%, #ffe6af 0)
      `;
    }
  }, [percentage]);

  return (
    <div className="circular-skills">
      <div
        ref={progressRef}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ "--value": percentage }}
      >
        {skill}-{percentage}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 91 },
    { name: "JavaScript", percentage: 85 },
    { name: "React js", percentage: 79 },
    { name: "Machine Learning", percentage: 95 },
    { name: "Python", percentage: 91 },
    { name: "Java", percentage: 85 },
    { name: "Angular", percentage: 79 },
    { name: "SQL", percentage: 95 },
    { name: "Agile", percentage: 91 },
    { name: "Pyspark", percentage: 85 },
    { name: "Numpy", percentage: 79 },
    { name: "Pandas", percentage: 95 },

    { name: "Networks", percentage: 85 },
    { name: "AWS", percentage: 79 },
  ];

  const circularSkills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 91 },
    { name: "JS", percentage: 85 },
    { name: "React js", percentage: 79 },
    { name: "ML", percentage: 95 },
    { name: "Python", percentage: 91 },
    { name: "Java", percentage: 85 },
    { name: "Angular", percentage: 79 },
    { name: "SQL", percentage: 95 },
    { name: "Agile", percentage: 91 },
    { name: "Pyspark", percentage: 85 },
    { name: "Numpy", percentage: 79 },
    { name: "Pandas", percentage: 95 },

    { name: "Network", percentage: 85 },
    { name: "AWS", percentage: 79 },
  ];
  return (
    <div className="skills-page">
      <div className="background">
        <MarsBackground />
      </div>
      <div className="main-section">
        <div className="container">
          <h2 className="heading-text">My Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
          <div className="circular-skills">
            {circularSkills.map((skill, index) => (
              <CircularProgress
                key={index}
                skill={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="skills-button-container">
        <Link to="/projects" className="nav-button">
          Go to Projects
        </Link>
        <Link to="/" className="nav-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Skills;
