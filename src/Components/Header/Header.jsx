import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* NavBar */}
      <header>
        <nav>
          <div className="container">
            <div className="navBar">
              {/* LEFT SIDE */}
              <div className="nav-left">
                {/* LOGO */}
                <Link to="/">
                  <img
                    className="logo"
                    src="/zomato_clone_reactjs/assets/Asset_0.avif"
                    alt="Logo"
                  />
                </Link>

                {/* INPUT GROUP */}
                <div className="input-bar">
                  {/* CITY DROPDOWN */}
                  <div className="input-wrapper">
                    <i className="fa-solid fa-location-dot icon-left"></i>

                    <select className="selection">
                      <option value="Dholera">Dholera</option>
                      <option value="Rajkot">Rajkot</option>
                      <option value="Surat">Surat</option>
                      <option value="Baroda">Baroda</option>
                    </select>
                  </div>

                  {/* SEARCH BAR */}
                  <div className="input-wrapper">
                    <i className="fa-solid fa-magnifying-glass icon-left"></i>

                    <input
                      type="text"
                      className="searchBar"
                      placeholder="Search for restaurant, cuisine or a dish"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="nav-right">
                <Link className="login-button" to="/login">
                  Log in
                </Link>
                <Link className="login-button" to="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Sub NavBar */}

      <section className="sub-nav-header js-sub-nav">
        <div className="container">
          <div className="sub-nav-slots flex">
            <div className="sub-nav-slot-1 flex ali">
              <div className="sub-nav-a-1">
                <Link className="" to="/" target="_self">
                  <img
                    className="sub-nav-a-img"
                    src="/zomato_clone_reactjs/assets/asset 1.avif"
                    alt=""
                  />
                </Link>
              </div>

              <NavLink
                className={({ isActive }) => `sub-nav-a-text
                  ${isActive ? "active-tab" : "inactive-tab"}
                  `}
                target="_self"
                to="/"
              >
                Delivery
              </NavLink>
            </div>
            <div className="sub-nav-slot-2 flex ali">
              <div className="sub-nav-a-2">
                <Link className="" to="/dinning" target="_self">
                  <img
                    className="sub-nav-a-img"
                    src="/zomato_clone_reactjs/assets/asset 2.avif"
                    alt=""
                  />
                </Link>
              </div>

              <NavLink
                to="/dinning"
                className={({ isActive }) =>
                  ` ${isActive ? "active-tab" : "inactive-tab"} sub-nav-a-text`
                }
                target="_self"
              >
                Dinning
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
