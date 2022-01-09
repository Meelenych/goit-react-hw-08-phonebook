import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to={`/register`}
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        Registration
      </NavLink>
      <NavLink
        to={`/login`}
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        Login
      </NavLink>
    </div>
  );
}
