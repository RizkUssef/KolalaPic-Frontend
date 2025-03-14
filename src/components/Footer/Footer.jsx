import React from 'react'
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'


export default function Footer() {
  return <>
        <footer className="footer-bg">
        <div className="w-[90%] mx-auto flex justify-between items-center py-10">
            <div className="header-color ">
                <Link to="/"><img src={logo} className="logo-font text-4xl mb-3"></img></Link>
                <div className="flex justify-center items-center text-2xl gap-10">
                    <Link to="/"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="/"><i className="fa-brands fa-pinterest"></i></Link>
                    <Link to="/"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
            <div className="secondary-font header-color w-[50%] ">
                <ul className="columns-2">
                    <li><Link to="/animals">Animals</Link></li>
                    <li><Link to="/calm">Calm</Link></li>
                    <li><Link to="/couples">Couples</Link></li>
                    <li><Link to="/dark">Dark</Link></li>
                    <li><Link to="/football">Football</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  </>
}
