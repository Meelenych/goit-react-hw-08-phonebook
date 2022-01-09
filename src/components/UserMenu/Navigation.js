import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import authSelectors from "../../redux/auth/auth-selectors";

const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.navPositioning}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        There and Back Again
      </NavLink>

      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;
