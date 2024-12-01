import React from 'react';
import 'flyonui/dist/full.css';
import 'flyonui/flyonui.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
