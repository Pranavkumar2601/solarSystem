import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onSectionClick }) => {
  const sections = [
    "About",
    "Portfolio",
    "Skills",
    "Projects",
    "Publications",
    "Certificates",
  ];

  return (
    <div className="sidebar">
      {sections.map((section, index) => (
        <div
          key={index}
          className="sidebar-section"
          onClick={() => onSectionClick(section)}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
