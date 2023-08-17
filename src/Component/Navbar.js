import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/navlogo.png";

export default function Navbar() {
  return (
    <>
    <div className="Parentnavbar">
      <div className="logo font-weight-bold">
        <img style={{ height: "35px", marginLeft: "10px" }} src={logo} />
      </div>
      <ul className="navul">
        <li className="active nav-item">
          <NavLink className={"nav-link"} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-link"} to="/About">
            {" "}
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/contact">
            Contact
          </NavLink>
        </li>
        <li> <NavLink className={"nav-link"} to="/Blog">
            Blog
          </NavLink></li>
        <li>Ambassador</li>
      </ul>
      <button className=" navbutton bg-dark text-white">Login</button>

    </div>
    
    </>
  );
}
