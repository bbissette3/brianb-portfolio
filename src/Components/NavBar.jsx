import { NavLink, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    let baseClasses = "p-5 text-white ";
    let activeClasses = "border-b-2 border-white ";
    let responsiveClasses = "text-xs sm:text-sm md:text-lg lg:text-xl";
    return location.pathname === path
      ? baseClasses + activeClasses + responsiveClasses
      : baseClasses + responsiveClasses;
  };

  return (
    <div className="sticky top-0 bg-[#2e3239] flex justify-between items-center">
      <div className="flex justify-around">
        <NavLink className={getNavLinkClass("/")} to="/">
          About
        </NavLink>
        <NavLink className={getNavLinkClass("/projects")} to="/projects">
          Projects
        </NavLink>
        <NavLink className={getNavLinkClass("/skills")} to="/skills">
          Skills
        </NavLink>
        <NavLink className={getNavLinkClass("/contact")} to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="flex pr-5 space-x-4">
        <a
          href="https://github.com/bbissette3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs sm:text-sm md:text-lg lg:text-4xl transition-transform duration-500 ease-in-out transform hover:rotate-360"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-bissette/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs sm:text-sm md:text-lg lg:text-4xl transition-transform duration-500 ease-in-out transform hover:rotate-360"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://drive.google.com/file/d/1AZ2jz9ZgZYwwhbRoyCFZGVwPakLsYXlm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="text-white text-xs sm:text-sm md:text-lg lg:text-4xl transition-transform duration-500 ease-in-out transform hover:rotate-360"
        >
          <FaFileDownload />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
