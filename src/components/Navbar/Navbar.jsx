import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const scrolledHeight = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrolledHeight >= viewportHeight - 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav
        id="nav"
        className="py-3 z-[999999] bg-transparent fixed inset-x-0 top-0  transition-all duration-500"
        style={
          scrolled
            ? { backgroundColor: "rgba(179, 200, 207,0.7)" }
            : { backgroundColor: "" }
        }
      >
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} className="logo-font header-color text-4xl"></img>
          </Link>
          <div className="w-[72%] flex justify-between items-center header-color secondary-font text-xl">
            <div className="flex justify-between items-center header-color secondary-font text-xl gap-7 ">
              <NavLink
                id="animals"
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500"
                to="/animals"
              >
                Animals
              </NavLink>
              <NavLink
                id="calm"
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500 "
                to="/calm"
              >
                Calm
              </NavLink>
              <NavLink
                id="couples"
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500 "
                to="/couples"
              >
                Couples
              </NavLink>
              <NavLink
                id="dark"
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500 "
                to="/dark"
              >
                Dark
              </NavLink>
              <NavLink
                id="football"
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500 "
                to="/football"
              >
                Football
              </NavLink>
            </div>
            <div className="flex justify-between items-center header-color secondary-font text-xl gap-2 ">
              <NavLink
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500"
                to="/register"
              >
                Register
              </NavLink>
                <button className="nav-links px-5 py-2 rounded-xl transition-all duration-500 cursor-pointer">Logout</button>
              <NavLink
                className="nav-links px-5 py-2 rounded-xl transition-all duration-500"
                to="/profile"
              >
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
