import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Career from './Pages/Career';
import About from './Pages/About';
import Blog from './Pages/Blog';

// 👇 Scroll-to-top logic inside App wrapper
const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <Router>
      <ScrollToTopWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </ScrollToTopWrapper>
    </Router>
  );
}

export default App;
