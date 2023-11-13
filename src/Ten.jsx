import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./reactRouter/Home";
import About from "./reactRouter/About";
import Contact from "./reactRouter/Contact";
import Navbar from "./reactRouter/Navbar";

export default function Ten() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
