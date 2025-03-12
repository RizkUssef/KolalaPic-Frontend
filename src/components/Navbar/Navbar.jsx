import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { createBrowserRouter } from 'react-router-dom'

export default function Navbar() {

  return <>
        <nav id="nav" className="py-3 z-[999999] bg-transparent fixed inset-x-0 top-0  transition-all duration-500">
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <Link to="/home"><h1 className="logo-font header-color text-4xl">Kolala pic</h1></Link>
            <div className="flex justify-between items-center header-color secondary-font text-xl gap-7 ">
                <NavLink id="animals" className="nav-links px-5 py-2 rounded-xl transition-all duration-500" to="/animals">Animals</NavLink>
                <NavLink id="calm" className="nav-links px-5 py-2 rounded-xl transition-all duration-500 " to="/calm">Calm</NavLink>
                <NavLink id="couples" className="nav-links px-5 py-2 rounded-xl transition-all duration-500 " to="/couples">Couples</NavLink>
                <NavLink id="dark" className="nav-links px-5 py-2 rounded-xl transition-all duration-500 " to="/dark">Dark</NavLink>
                <NavLink id="football" className="nav-links px-5 py-2 rounded-xl transition-all duration-500 " to="/football">Football</NavLink>
                <NavLink className="nav-links px-5 py-2 rounded-xl transition-all duration-500" to="/login">Login</NavLink>
                <NavLink className="nav-links px-5 py-2 rounded-xl transition-all duration-500" to="/register">Register</NavLink>
            </div>
        </div>
    </nav>
  </>
}
