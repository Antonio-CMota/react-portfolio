// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
