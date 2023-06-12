import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "p-5 text-lg text-white border-b-2 border-white"
      : "p-5 text-lg text-white";
  };

  return (
    <div className="sticky top-0 bg-[#2e3239] flex justify-around w-full">
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
  );
}

export default Navbar;
