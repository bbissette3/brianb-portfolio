//react router
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

//react toastify
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer theme="dark" />
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
