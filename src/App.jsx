import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
