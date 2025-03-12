import React from 'react'

export default function Footer() {
  return <>
        <footer className="footer-bg">
        <div className="w-[90%] mx-auto flex justify-between items-center py-10">
            <div className="header-color ">
                <a href=""><h1 className="logo-font text-4xl mb-3">Kolala pic</h1></a>
                <div className="flex justify-center items-center text-2xl gap-10">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-pinterest"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="secondary-font header-color w-[50%] ">
                <ul className="columns-2">
                    <li><a href="">Animals</a></li>
                    <li><a href="">Calm</a></li>
                    <li><a href="">Couples</a></li>
                    <li><a href="">Dark</a></li>
                    <li><a href="">Football</a></li>
                </ul>
            </div>
        </div>
    </footer>
  </>
}
