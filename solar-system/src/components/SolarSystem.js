// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import DarkModeToggle from "./DarkModeToggle";
// // import Sidebar from "./Sidebar";
// // import About from "./About"; // Import the section components
// // import Portfolio from "./Portfolio";
// // import Skills from "./Skills";
// // import Publications from "./Publications";
// // import Projects from "./Projects";
// // import Certificates from "./Certificates";
// import './SolarSystem.css';
// import Carousel from "./Carousel";

// const SolarSystem = () => {
//   const mountRef = useRef(null);
//   // const raycaster = new THREE.Raycaster();
//   // const mouse = new THREE.Vector2();
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };

//     const items = [
//       { name: "About", content: <About /> },
//       { name: "Portfolio", content: <Portfolio /> },
//       { name: "Skills", content: <Skills /> },
//       { name: "Projects", content: <Projects /> },
//       { name: "Publications", content: <Publications /> },
//       { name: "Certificates", content: <Certificates /> },
//       // Add more items as needed
//     ];
//   const handleItemSelect = (item) => {
//     setActiveItem(item);
//     setShowCarousel(false); // Hide the carousel when an item is selected
//   };

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Sun
//     const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
//     const sunTexture = new THREE.TextureLoader().load("/textures/8k_sun.jpg");
//     const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);

//     const ambientLight = new THREE.AmbientLight(
//       isDarkMode ? 0x101010 : 0x404040,
//       1.5
//     );
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(0, 1, 1);
//     scene.add(directionalLight);

//     // Planets
//     const planets = [];
//     const planetData = [
//       { size: 0.5, distance: 8, texture: "/textures/8k_mercury.jpg" },
//       { size: 0.7, distance: 11, texture: "/textures/8k_venus.jpg" },
//       { size: 1, distance: 15, texture: "/textures/8k_earth_daymap.jpg" },
//       { size: 1.5, distance: 20, texture: "/textures/8k_mars.jpg" },
//       { size: 2.0, distance: 30, texture: "/textures/8k_jupiter.jpg" },
//       { size: 3.0, distance: 40, texture: "/textures/8k_saturn.jpg" },
//       { size: 1, distance: 45, texture: "/textures/8k_uranus.jpg" },

//       // Add more planets here...
//     ];

//     planetData.forEach((planet, index) => {
//       const geometry = new THREE.SphereGeometry(planet.size, 32, 32);
//       const texture = new THREE.TextureLoader().load(planet.texture);
//       const material = new THREE.MeshStandardMaterial({ map: texture });
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.x = planet.distance;
//       scene.add(mesh);
//       planets.push({ mesh, distance: planet.distance });
//     });

//     //Star

//     const starGeometry = new THREE.BufferGeometry();
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

//     // Generate random positions for stars
//     const starVertices = [];
//     for (let i = 0; i < 10000; i++) {
//       const x = THREE.MathUtils.randFloatSpread(2000);
//       const y = THREE.MathUtils.randFloatSpread(2000);
//       const z = THREE.MathUtils.randFloatSpread(2000);
//       starVertices.push(x, y, z);
//     }

//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3)
//     );
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     camera.position.z = 50;

//     // Animate the scene
//     const animate = () => {
//       planets.forEach((planet, index) => {
//         planet.mesh.position.x =
//           Math.cos(Date.now() * 0.001 + index) * planet.distance;
//         planet.mesh.position.z =
//           Math.sin(Date.now() * 0.001 + index) * planet.distance;
//       });

//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, [isDarkMode]);

//   // Section
//   const renderSectionContent = () => {
//     switch (activeSection) {
//       case "About":
//         return <About />;
//       case "Portfolio":
//         return <Portfolio />;
//       case "Skills":
//         return <Skills />;
//       case "Projects":
//         return <Projects />;
//       case "Publications":
//         return <Publications />;
//       case "Certificates":
//         return <Certificates />;

//       default:
//         return null;
//     }
//   };

//   return (
//     <div ref={mountRef}>
//       <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//       <Sidebar onSectionClick={handleSectionClick} />
//       {activeSection && <div className="content">{renderSectionContent()}</div>}
//     </div>
//   );
// };

// export default SolarSystem;

// Using Carousel
// import React, { useState, useRef, useEffect } from "react";
// import Carousel from "./Carousel";
// import * as THREE from "three";
// import About from "./About";
// import Skills from "./Skills";
// // import Experience from "./Experience";
// import Projects from "./Projects";
// import Publications from "./Publications";
// import Certificates from "./Certificates";

// const SolarSystem = () => {
//   const mountRef = useRef(null);
//   const [isCarouselOpen, setCarouselOpen] = useState(false);
//   const [selectedPage, setSelectedPage] = useState(null);
//   const carouselRef = useRef(null);
//   const [isCarouselMinimized, setCarouselMinimized] = useState(false);

//   useEffect(() => {
//     // Create the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true, // Ensures transparency
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Galaxy/Milky Way Background
//     const galaxyTexture = new THREE.TextureLoader().load(
//       "/textures/8k_stars_milky_way.jpg"
//     );
//     scene.background = galaxyTexture;

//     // Sun
//     const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
//     const sunTexture = new THREE.TextureLoader().load("/textures/8k_sun.jpg");
//     const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);

//     const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(0, 1, 1);
//     scene.add(directionalLight);

//     // Planets
//     const planets = [];
//     const planetData = [
//       {
//         size: 0.5,
//         distance: 8,
//         texture: "/textures/8k_mercury.jpg",
//         moons: [],
//       },
//       {
//         size: 0.7,
//         distance: 11,
//         texture: "/textures/8k_venus.jpg",
//         moons: [{ size: 0.1, distance: 1 }],
//       },
//       {
//         size: 1,
//         distance: 15,
//         texture: "/textures/8k_earth_daymap.jpg",
//         moons: [
//           { size: 0.2, distance: 2 },
//           { size: 0.1, distance: 3 },
//         ],
//       },
//       {
//         size: 1.5,
//         distance: 20,
//         texture: "/textures/8k_mars.jpg",
//         moons: [{ size: 0.1, distance: 2 }],
//       },
//       {
//         size: 2.0,
//         distance: 30,
//         texture: "/textures/8k_jupiter.jpg",
//         moons: [
//           { size: 0.3, distance: 3 },
//           { size: 0.2, distance: 4 },
//           { size: 0.1, distance: 5 },
//         ],
//       },
//       {
//         size: 3.0,
//         distance: 40,
//         texture: "/textures/8k_saturn.jpg",
//         moons: [{ size: 0.3, distance: 3 }],
//       },
//       {
//         size: 1,
//         distance: 45,
//         texture: "/textures/8k_uranus.jpg",
//         moons: [{ size: 0.2, distance: 2 }],
//       },
//       {
//         size: 1,
//         distance: 50,
//         texture: "/textures/8k_neptune.jpg",
//         moons: [{ size: 0.1, distance: 2 }],
//       },
//     ];

//     planetData.forEach((planet, index) => {
//       const geometry = new THREE.SphereGeometry(planet.size, 32, 32);
//       const texture = new THREE.TextureLoader().load(planet.texture);
//       const material = new THREE.MeshStandardMaterial({ map: texture });
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.x = planet.distance;
//       scene.add(mesh);
//       planets.push({ mesh, distance: planet.distance, moons: [] });

//       // Moons for the planet
//       planet.moons.forEach((moon) => {
//         const moonGeometry = new THREE.SphereGeometry(moon.size, 32, 32);
//         const moonMaterial = new THREE.MeshStandardMaterial({
//           map: texture,
//         });
//         const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
//         moonMesh.position.x = planet.distance + moon.distance;
//         scene.add(moonMesh);
//         planets[index].moons.push({ mesh: moonMesh, distance: moon.distance });
//       });
//     });

//     // Starfield
//     const starGeometry = new THREE.BufferGeometry();
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

//     // Generate random positions for stars
//     const starVertices = [];
//     for (let i = 0; i < 10000; i++) {
//       const x = THREE.MathUtils.randFloatSpread(2000);
//       const y = THREE.MathUtils.randFloatSpread(2000);
//       const z = THREE.MathUtils.randFloatSpread(2000);
//       starVertices.push(x, y, z);
//     }

//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3)
//     );
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     camera.position.z = 50;

//     // Animate the scene
//     const animate = () => {
//       planets.forEach((planet, index) => {
//         planet.mesh.position.x =
//           Math.cos(Date.now() * 0.001 + index) * planet.distance;
//         planet.mesh.position.z =
//           Math.sin(Date.now() * 0.001 + index) * planet.distance;

//         // Animate moons around their respective planets
//         planet.moons.forEach((moon, moonIndex) => {
//           moon.mesh.position.x =
//             planet.mesh.position.x +
//             Math.cos(Date.now() * 0.001 + moonIndex) * moon.distance;
//           moon.mesh.position.z =
//             planet.mesh.position.z +
//             Math.sin(Date.now() * 0.001 + moonIndex) * moon.distance;
//         });
//       });

//       // Star blinking and slow movement
//       stars.rotation.x += 0.0001;
//       stars.rotation.y += 0.0001;

//       const starScale = Math.sin(Date.now() * 0.002) * 0.1 + 1.0;
//       stars.scale.set(starScale, starScale, starScale);

//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   const handleCarouselOpen = () => {
//     setCarouselOpen(true);
//     setCarouselMinimized(false);
//   };

//   const handleCarouselClose = () => {
//     setCarouselOpen(false);
//     setSelectedPage(null); // Close the carousel and reset selected page
//   };

//   const handleCarouselMinimize = () => {
//     setCarouselMinimized(true);
//   };

//   const handlePageSelect = (page) => {
//     setSelectedPage(page);
//     setCarouselMinimized(true);
//   };

//   const renderContent = () => {
//     switch (selectedPage) {
//       case "about":
//         return <About />;
//       case "skills":
//         return <Skills />;
//       // case "experience":
//       //   return <Experience />;
//       case "project":
//         return <Projects />;
//       case "publication":
//         return <Publications />;
//       case "certificates":
//         return <Certificates />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div ref={mountRef} />

//       <button className="open-carousel-button" onClick={handleCarouselOpen}>
//         Explore
//       </button>

//       <Carousel
//         isOpen={isCarouselOpen}
//         onClose={handleCarouselClose}
//         onSelect={handlePageSelect}
//         isMinimized={isCarouselMinimized}
//         onMinimize={() => setCarouselMinimized(false)}
//       />

//       {selectedPage && <div className="content-section">{renderContent()}</div>}
//     </div>
//   );
// };

// export default SolarSystem;
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import ExploreModal from "./ExploreModal"; // Import the ExploreModal component

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // Ensures transparency
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Galaxy/Milky Way Background
    const galaxyTexture = new THREE.TextureLoader().load(
      "/textures/8k_stars_milky_way.jpg"
    );
    scene.background = galaxyTexture;

    // Sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunTexture = new THREE.TextureLoader().load("/textures/8k_sun.jpg");
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Planets
    const planets = [];
    const planetData = [
      {
        size: 0.5,
        distance: 8,
        texture: "/textures/8k_mercury.jpg",
        moons: [],
      },
      {
        size: 0.7,
        distance: 11,
        texture: "/textures/8k_venus.jpg",
        moons: [{ size: 0.1, distance: 1 }],
      },
      {
        size: 1,
        distance: 15,
        texture: "/textures/8k_earth_daymap.jpg",
        moons: [
          { size: 0.2, distance: 2 },
          { size: 0.1, distance: 3 },
        ],
      },
      {
        size: 1.5,
        distance: 20,
        texture: "/textures/8k_mars.jpg",
        moons: [{ size: 0.1, distance: 2 }],
      },
      {
        size: 2.0,
        distance: 30,
        texture: "/textures/8k_jupiter.jpg",
        moons: [
          { size: 0.3, distance: 3 },
          { size: 0.2, distance: 4 },
          { size: 0.1, distance: 5 },
        ],
      },
      {
        size: 3.0,
        distance: 40,
        texture: "/textures/8k_saturn.jpg",
        moons: [{ size: 0.3, distance: 3 }],
      },
      {
        size: 1,
        distance: 45,
        texture: "/textures/8k_uranus.jpg",
        moons: [{ size: 0.2, distance: 2 }],
      },
      {
        size: 1,
        distance: 50,
        texture: "/textures/8k_neptune.jpg",
        moons: [{ size: 0.1, distance: 2 }],
      },
    ];

    planetData.forEach((planet, index) => {
      const geometry = new THREE.SphereGeometry(planet.size, 32, 32);
      const texture = new THREE.TextureLoader().load(planet.texture);
      const material = new THREE.MeshStandardMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = planet.distance;
      scene.add(mesh);
      planets.push({ mesh, distance: planet.distance, moons: [] });

      // Moons for the planet
      planet.moons.forEach((moon) => {
        const moonGeometry = new THREE.SphereGeometry(moon.size, 32, 32);
        const moonMaterial = new THREE.MeshStandardMaterial({
          map: texture,
        });
        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        moonMesh.position.x = planet.distance + moon.distance;
        scene.add(moonMesh);
        planets[index].moons.push({ mesh: moonMesh, distance: moon.distance });
      });
    });

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    // Generate random positions for stars
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 50;

    // Animate the scene
    const animate = () => {
      planets.forEach((planet, index) => {
        planet.mesh.position.x =
          Math.cos(Date.now() * 0.001 + index) * planet.distance;
        planet.mesh.position.z =
          Math.sin(Date.now() * 0.001 + index) * planet.distance;

        // Animate moons around their respective planets
        planet.moons.forEach((moon, moonIndex) => {
          moon.mesh.position.x =
            planet.mesh.position.x +
            Math.cos(Date.now() * 0.001 + moonIndex) * moon.distance;
          moon.mesh.position.z =
            planet.mesh.position.z +
            Math.sin(Date.now() * 0.001 + moonIndex) * moon.distance;
        });
      });

      // Star blinking and slow movement
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0001;

      const starScale = Math.sin(Date.now() * 0.002) * 0.1 + 1.0;
      stars.scale.set(starScale, starScale, starScale);

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <div ref={mountRef} />
      <button
        onClick={() => setShowModal(true)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "transparent",
          color: "#ffffff",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Explore
      </button>
      {showModal && <ExploreModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SolarSystem;
