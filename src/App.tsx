import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Awards from './pages/Awards';
import TechStack from './pages/TechStack';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900 pointer-events-none"></div>
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/tech-stack" element={<TechStack />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;