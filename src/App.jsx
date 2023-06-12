import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
