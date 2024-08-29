import React from "react";
import { Route, Routes } from "react-router-dom";
import SolarSystem from "./components/SolarSystem";
import AboutPage from "./components/AboutPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SolarSystem />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
