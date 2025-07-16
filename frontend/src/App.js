import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Enquire from './Enquire';
import Products from './Products';
import Footer from './Footer';
import Navbar from './Navbar';
import Baler from './Baler';
import Tyrefolding from './Tyrefolding';
import Tyrecutting from './Tyrecutting';
import Ooty from './Ooty';
import Signup from './Signup';
import Login from './Login';
import UserProfile from './Userprofile';
import Contacted from './contacted';
import PdfGenerator from './PdfGenerator';
import Goa from './Goa';
import Pahalgam from './Pahalgam';
import Places from './Places';



function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus/>} />
        <Route exact path="/ooty" element={<Ooty/>}/>
        <Route exact path="/goa" element={<Goa />} />
        <Route exact path="/pahalgam" element={<Pahalgam />} />
        <Route exact path="/places" element={<Places />} />
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/contacted" element={<Contacted/>}/>
        <Route exact path="/enquire" element={<Enquire />} />
        <Route exact path="/products" element={<Products/>} />
         <Route exact path="/baler" element={<Baler/>} />
         <Route exact path="/tyrefolding" element={<Tyrefolding/>} />
         <Route exact path="/tyrecutting" element={<Tyrecutting/>} />
         <Route exact path="/pdf" element={<PdfGenerator />} />



      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
