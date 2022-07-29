import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './sections/about/about.component';
import Service from './sections/service/service.component';
import Skills from './sections/skills/skills.component';
import Contact from './sections/contact/contact.component';
import Education from './sections/education/education.component';
import Experience from './sections/experience/experience.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
