import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contactus from './Contactus';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contactus />} />
        
      </Routes>
    </Router>
  );
}

export default App;
