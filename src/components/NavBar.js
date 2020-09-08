import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              className="Nav_link"
              activeClassName="activeRoute"
              exact={true}
              activeStyle={{ fontWeight: "bold", color: "black" }}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ fontWeight: "bold", color: "black" }}
              to="/doctors"
            >
              Who is om duty
            </NavLink>
          </li>

          <li>
            <NavLink
              className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ fontWeight: "bold", color: "black" }}
              to="/signup"
            >
              Patients sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Nav_link"
              activeClassName="activeRoute"
              exact={true}
              activeStyle={{ fontWeight: "bold", color: "black" }}
              to="/database"
            >
              Patients Data Base
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
