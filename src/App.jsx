import React from 'react';
import 'flyonui/dist/full.css';
import 'flyonui/flyonui.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Moremnb from './pages/Moremnb';

import Radoksiii from './pages/Radoksiii';
import { More } from '@mui/icons-material';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main >
          <Routes>
    
            <Route path="/" element={<Home />}  />
            {/* <Route path="/Moremnb" element={<Moremnb />} /> */}
            <Route path="/radoksiii" element={<Radoksiii />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
