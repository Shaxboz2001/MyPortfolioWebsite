import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserAlt, FaList, FaAddressBook } from "react-icons/fa";
import {BsBookmarkFill} from 'react-icons/bs'
import {CgWebsite} from "react-icons/cg"
import '../style/main.css'
function NavBar() {
  
  return (
    <div>
      <nav>
        <Link to={"/"}><AiFillHome /> Home</Link>
        <Link to={"/about"}><FaUserAlt />About</Link>
        <Link to={"/service"}><FaList />Services</Link>
        <Link to={"/skills"}><FaAddressBook />Skills</Link>
        <Link to={"/education"}><BsBookmarkFill />Education</Link>
        <Link to={"/experience"}><CgWebsite />Experience</Link>
        <Link to={"/contact"}><AiFillMessage />Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
