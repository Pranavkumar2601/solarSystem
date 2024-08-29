import React from "react";
import { Link } from "react-router-dom";
import "./ExploreModal.css"; // Create and style this CSS file

const ExploreModal = ({ onClose }) => {
  return (
    <div className="explore-modal">
      <div className="explore-modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Explore</h2>
        <ul>
          <li>
            <Link to="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={onClose}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={onClose}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/publications" onClick={onClose}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contacts" onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreModal;
