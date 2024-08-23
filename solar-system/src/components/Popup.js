// src/components/Popup.js
import React from "react";

const Popup = ({ content, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default Popup;
