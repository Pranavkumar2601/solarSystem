// // import React, { useState, useEffect } from "react";
// // import "./Carousel.css";

// // const Carousel = ({ items, onItemSelect }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
// //     }, 2000); // Auto-scroll every 3 seconds

// //     return () => clearInterval(interval);
// //   }, [items.length]);

// //   const handleDrag = (direction) => {
// //     if (direction === "left") {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === 0 ? items.length - 1 : prevIndex - 1
// //       );
// //     } else {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === items.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }
// //   };

// //   return (
// //     <div className="carousel">
// //       {items.map((item, index) => (
// //         <div
// //           key={index}
// //           className={`carousel-item ${index === currentIndex ? "active" : ""}`}
// //           onClick={() => onItemSelect(item)}
// //         >
// //           {item.name}
// //         </div>
// //       ))}
// //       <button
// //         className="carousel-control left"
// //         onClick={() => handleDrag("left")}
// //       >
// //         ‹
// //       </button>
// //       <button
// //         className="carousel-control right"
// //         onClick={() => handleDrag("right")}
// //       >
// //         ›
// //       </button>
// //     </div>
// //   );
// // };

// // export default Carousel;
// import React, { useState, useEffect } from "react";
// import "./Carousel.css";

// const Carousel = ({ items, onItemSelect }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, 2000); // Auto-scroll every 3 seconds

//     return () => clearInterval(interval);
//   }, [items.length]);

//   const handleDrag = (direction) => {
//     if (direction === "left") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? items.length - 1 : prevIndex - 1
//       );
//     } else {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }
//   };

//   return (
//     <div className="carousel">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className={`carousel-item ${index === currentIndex ? "active" : ""}`}
//           onClick={() => onItemSelect(item)}
//         >
//           {item.name}
//         </div>
//       ))}
//        <div className="carousel-control left" onClick={() => handleDrag("left")}>
//         &#10094;
//       </div>
//       <div
//         className="carousel-control right"
//         onClick={() => handleDrag("right")}
//       >
//         &#10095;
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useRef, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ isOpen, onClose, onSelect, isMinimized, onMinimize }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carouselRef.current && !carouselRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen && !isMinimized) return null;

  return (
    <div className={`carousel ${isMinimized ? "minimized" : ""}`}>
      <div
        className={`carousel-container ${isMinimized ? "minimized" : ""}`}
        ref={carouselRef}
      >
        {!isMinimized && (
          <>
            <div className="carousel-item" onClick={() => onSelect("about")}>
              About
            </div>
            <div className="carousel-item" onClick={() => onSelect("skills")}>
              Skills
            </div>
            <div
              className="carousel-item"
              onClick={() => onSelect("experience")}
            >
              Experience
            </div>
            <div className="carousel-item" onClick={() => onSelect("project")}>
              Projects
            </div>
            <div
              className="carousel-item"
              onClick={() => onSelect("publication")}
            >
              Publication
            </div>
            <div
              className="carousel-item"
              onClick={() => onSelect("certificates")}
            >
              Certificates
            </div>
          </>
        )}
        {isMinimized && (
          <button className="carousel-control" onClick={onMinimize}>
            Open Carousel
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
