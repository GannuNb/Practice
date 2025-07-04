import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Enquire from './Enquire';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus/>} />
        <Route exact path="/enquire" element={<Enquire />} />

      </Routes>
    </Router>
  );
}

export default App;
