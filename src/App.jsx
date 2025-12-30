import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Destinations from "./Pages/Destinations";
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
