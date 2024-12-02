import React from 'react';
import 'flyonui/dist/full.css';
import 'flyonui/flyonui.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Radoksiii from './pages/Radoksiii';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main >
          <Routes>
    
            <Route path="/" element={<Home />}  />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/radoksiii" element={<Radoksiii />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
