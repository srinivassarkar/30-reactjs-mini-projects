import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./reactRouter/About";
import Contact from "./reactRouter/Contact";
import Home from "./reactRouter/Home";
import Navbar from './reactRouter/Navbar';

function Thirty() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Thirty;
