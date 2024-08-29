// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const EarthBackground = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Create the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Galaxy Background
//     const galaxyTexture = new THREE.TextureLoader().load(
//       "/textures/8k_stars_milky_way.jpg"
//     );
//     scene.background = galaxyTexture;

//     // Earth
//     const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
//     const earthTexture = new THREE.TextureLoader().load(
//       "/textures/2k_earth_nightmap.jpg"
//     );
//     const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
//     const earth = new THREE.Mesh(earthGeometry, earthMaterial);
//     scene.add(earth);

//     // Moons
//     const moonData = [
//       { size: 1, distance: 7, texture: "/textures/8k_moon.jpg" }, // Moon 1
//       //   { size: 0.5, distance: 12, texture: "/textures/8k_moon.jpg" }, // Moon 2
//     ];

//     const moons = moonData.map((moon, index) => {
//       const moonGeometry = new THREE.SphereGeometry(moon.size, 32, 32);
//       const moonTexture = new THREE.TextureLoader().load(moon.texture);
//       const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
//       const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
//       scene.add(moonMesh);
//       return { mesh: moonMesh, distance: moon.distance, index };
//     });

//     camera.position.z = 20;

//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate Earth
//       earth.rotation.y += 0.001;

//       // Move moons
//       moons.forEach((moon) => {
//         moon.mesh.position.x =
//           Math.cos(Date.now() * 0.001 + moon.index) * moon.distance;
//         moon.mesh.position.z =
//           Math.sin(Date.now() * 0.001 + moon.index) * moon.distance;
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} className="earth-background" />;
// };

// export default EarthBackground;
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SpaceBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Galaxy Background
    const galaxyTexture = new THREE.TextureLoader().load(
      "/textures/8k_stars_milky_way.jpg"
    );
    scene.background = galaxyTexture;

    // Planet
    const planetGeometry = new THREE.SphereGeometry(5, 32, 32);
    const planetTexture = new THREE.TextureLoader().load(
      "/textures/2k_earth_nightmap.jpg"
    );
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    // Moon
    const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
    const moonTexture = new THREE.TextureLoader().load("/textures/8k_moon.jpg");
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(8, 0, 0);

    // Moon Orbit
    const moonOrbit = new THREE.Object3D();
    moonOrbit.add(moon);
    scene.add(moonOrbit);

    // Visible Moon Orbit Path
    const orbitGeometry = new THREE.BufferGeometry();
    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
    });
    const orbitPoints = [];
    const orbitSegments = 64;
    for (let i = 0; i <= orbitSegments; i++) {
      const theta = (i / orbitSegments) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(Math.cos(theta) * 8, 0, Math.sin(theta) * 8)
      );
    }
    orbitGeometry.setFromPoints(orbitPoints);
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    scene.add(orbitLine);

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Meteors
    const meteors = [];
    const createMeteor = () => {
      const geometry = new THREE.SphereGeometry(0.1, 8, 8);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const meteor = new THREE.Mesh(geometry, material);
      meteor.position.set(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      );
      meteor.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      );
      scene.add(meteor);
      meteors.push(meteor);
    };

    camera.position.z = 30;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate planet
      planet.rotation.y += 0.005;

      // Rotate moon
      moon.rotation.y += 0.01;

      // Orbit moon around planet
      moonOrbit.rotation.y += 0.02;

      // Update visible orbit path
      const orbitProgress =
        (moonOrbit.rotation.y % (Math.PI * 2)) / (Math.PI * 2);
      const visibleSegments = Math.floor(orbitSegments * 0.3); // Show about 30% of the orbit
      const startIndex = Math.floor(orbitProgress * orbitSegments);
      for (let i = 0; i <= orbitSegments; i++) {
        const index = (startIndex + i) % orbitSegments;
        const point = orbitPoints[index];
        const opacity = i <= visibleSegments ? 1 - i / visibleSegments : 0;
        point.setY(opacity * 0.1); // Use Y-coordinate to store opacity
      }
      orbitGeometry.setFromPoints(orbitPoints);
      orbitGeometry.attributes.position.needsUpdate = true;

      // Twinkle stars
      stars.rotation.y += 0.0001;
      const positions = stars.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
      }
      stars.geometry.attributes.position.needsUpdate = true;

      // Move meteors
      meteors.forEach((meteor, index) => {
        meteor.position.add(meteor.velocity);
        if (meteor.position.length() > 100) {
          scene.remove(meteor);
          meteors.splice(index, 1);
        }
      });

      // Occasionally create new meteors
      if (Math.random() < 0.02) createMeteor();

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default SpaceBackground;
