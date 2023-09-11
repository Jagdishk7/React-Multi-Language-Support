import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';


function MyComponent() {

  return (
    <>
    

  <BrowserRouter>
        <Navbar />
        {/* Routes to switch component based on NavLink path from Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      



  </>
  )
}

// i18n translations might still be loaded by the http backend
// using react's Suspense to display a fallback text untill childs are loaded
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}