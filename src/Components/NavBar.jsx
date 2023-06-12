// import { NavLink, useLocation } from "react-router-dom";

// function Navbar() {
//   const location = useLocation();

//   const getNavLinkClass = (path) => {
//     return location.pathname === path
//       ? "p-5 text-lg text-white border-b-2 border-white"
//       : "p-5 text-lg text-white";
//   };

//   return (
//     <div className="sticky flex justify-around">
//       <NavLink className={getNavLinkClass("/about")} to="/about">
//         About
//       </NavLink>
//       <NavLink className={getNavLinkClass("/projects")} to="/projects">
//         Projects
//       </NavLink>
//       <NavLink className={getNavLinkClass("/contact")} to="/contact">
//         Contact
//       </NavLink>
//     </div>
//   );
// }

// export default Navbar;
function Navbar() {
  return (
    <div className="sticky top-0 bg-[#26292b] opacity-100">
      <div className="flex justify-around">
        <a className="p-5 text-lg text-white" href="#about">
          About
        </a>
        <a className="p-5 text-lg text-white" href="#projects">
          Projects
        </a>
        <a className="p-5 text-lg text-white" href="#skills">
          Skills
        </a>
        <a className="p-5 text-lg text-white" href="#contact">
          Contact
        </a>
      </div>
      <hr className="w-full border-b border-gray-900 opacity-25" />
    </div>
  );
}

export default Navbar;
