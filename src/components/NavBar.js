import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../style/main.css'
function NavBar() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/service"}>Services</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/education"}>Education</Link>
        <Link to={"/experience"}>Experience</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
