import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Enquire from './Enquire';
import Products from './Products';
import Footer from './Footer';

import Navbar from './Navbar';

import Baler from './Baler';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus/>} />
        <Route exact path="/enquire" element={<Enquire />} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/footer" element={<Footer/>} />

        <Route exact path="/navbar" element={<Navbar/>} />

         <Route exact path="/baler" element={<Baler/>} />


      </Routes>
    </Router>
  );
}

export default App;
