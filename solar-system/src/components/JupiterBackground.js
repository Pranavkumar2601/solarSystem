import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const JupiterSystem = () => {
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

    // Jupiter
    const jupiterGeometry = new THREE.SphereGeometry(10, 32, 32);
    const jupiterTexture = new THREE.TextureLoader().load(
      "/textures/8k_jupiter.jpg"
    );
    const jupiterMaterial = new THREE.MeshBasicMaterial({
      map: jupiterTexture,
    });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    scene.add(jupiter);

    // Moon textures
    const moonTextures = [
      "/textures/8k_moon.jpg",
      "/textures/moon.jpg",
      "/textures/8k_moon.jpg",
      "/textures/moon.jpg",
      "/textures/moon.jpg",
      "/textures/8k_moon.jpg",
      "/textures/8k_moon.jpg",
      "/textures/moon.jpg",
      "/textures/8k_moon.jpg",
      "/textures/moon.jpg",
    ];

    // Moons and their orbits
    const moons = [];
    const moonOrbits = [];
    const createMoon = (index) => {
      const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const moonTexture = new THREE.TextureLoader().load(moonTextures[index]);
      const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);

      const orbitRadius = 15 + index * 2;
      const orbitTilt = Math.random() * Math.PI;
      const orbitPhase = Math.random() * Math.PI * 2;

      const moonOrbit = new THREE.Object3D();
      moonOrbit.rotation.x = orbitTilt;
      moonOrbit.rotation.y = orbitPhase;
      moon.position.set(orbitRadius, 0, 0);
      moonOrbit.add(moon);
      scene.add(moonOrbit);

      // Visible Orbit Path
      const orbitGeometry = new THREE.BufferGeometry();
      const orbitMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
      });
      const orbitPoints = [];
      const orbitSegments = 128;
      for (let i = 0; i <= orbitSegments; i++) {
        const theta = (i / orbitSegments) * Math.PI * 2;
        orbitPoints.push(
          new THREE.Vector3(
            Math.cos(theta) * orbitRadius,
            0,
            Math.sin(theta) * orbitRadius
          )
        );
      }
      orbitGeometry.setFromPoints(orbitPoints);
      const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
      orbitLine.rotation.x = orbitTilt;
      orbitLine.rotation.y = orbitPhase;
      scene.add(orbitLine);

      moons.push({ moon, orbit: moonOrbit, speed: 0.02 - index * 0.001 });
      moonOrbits.push({
        line: orbitLine,
        points: orbitPoints,
        geometry: orbitGeometry,
      });
    };

    // Create 10 moons
    for (let i = 0; i < 10; i++) {
      createMoon(i);
    }

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

    camera.position.z = 50;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Jupiter
      jupiter.rotation.y += 0.002;

      // Update moons and their orbits
      moons.forEach((moon, index) => {
        moon.orbit.rotation.y += moon.speed;
        moon.moon.rotation.y += 0.01; // Rotate each moon

        // Update visible orbit path
        const orbitProgress =
          (moon.orbit.rotation.y % (Math.PI * 2)) / (Math.PI * 2);
        const visibleSegments = Math.floor(128 * 0.3); // Show about 30% of the orbit
        const startIndex = Math.floor(orbitProgress * 128);
        for (let i = 0; i <= 128; i++) {
          const idx = (startIndex + i) % 128;
          const point = moonOrbits[index].points[idx];
          const opacity = i <= visibleSegments ? 1 - i / visibleSegments : 0;
          point.setY(opacity * 0.1); // Use Y-coordinate to store opacity
        }
        moonOrbits[index].geometry.setFromPoints(moonOrbits[index].points);
        moonOrbits[index].geometry.attributes.position.needsUpdate = true;
      });

      // Twinkle stars
      stars.rotation.y += 0.0001;
      const positions = stars.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
      }
      stars.geometry.attributes.position.needsUpdate = true;

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

export default JupiterSystem;
