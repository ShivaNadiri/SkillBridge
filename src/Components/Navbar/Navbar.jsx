import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { TfiClose, TfiAlignRight } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../App";
function Navbar() {
  const [openDesignCourse, setOpenDesignCourse] = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={getImageUrl("Logo/shape-17.png")}
            alt="logo"
            className={styles.logoShape}
          />
        </div>
        <ul className={`${styles.NavItems} ${menuOpen && styles.menuOpen}`}>
          <li className={styles.NavItem}>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? `${styles.active}` : null;
              }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to="/courses"
              className={({ isActive }) => {
                return isActive ? `${styles.active}` : null;
              }}
              onClick={() =>
                `${setOpenDesignCourse(false)} ${setMenuOpen(false)}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) => {
                return isActive ? `${styles.active}` : null;
              }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              About Us
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to="/pricing"
              className={({ isActive }) => {
                return isActive ? `${styles.active}` : null;
              }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Pricing
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              to="/Contact"
              className={({ isActive }) => {
                return isActive ? `${styles.active}` : null;
              }}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Conatct
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.ButtonContainer}>
        <NavLink
          to="/SignUp"
          className={({ isActive }) => {
            return isActive ? `${styles.activeOrange}` : null;
          }}
        >
          <button>Sign Up</button>
        </NavLink>
        <NavLink
          to="/Login"
          className={({ isActive }) => {
            return isActive ? `${styles.activeOrange}` : null;
          }}
        >
          <button className={styles.loginBtn}>Login</button>
        </NavLink>

        {menuOpen ? (
          <RxCross2
            className={styles.menuCrossIcon}
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        ) : (
          <TfiAlignRight
            className={styles.menuIcon}
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
