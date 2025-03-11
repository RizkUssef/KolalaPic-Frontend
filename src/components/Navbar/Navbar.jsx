import React from 'react'

export default function Navbar() {
  return <>
        <nav id="nav" class="py-3 z-[999999] drop-shadow-nav bg-transparent fixed left-0 right-0  transition-all duration-500">
        <div class="w-[90%] mx-auto flex justify-between items-center">
            <a href=""><h1 class="logo-font header-color text-4xl">Kolala pic</h1></a>
            <div class="flex justify-between items-center header-color secondary-font text-xl gap-7 ">
                <a id="animals" class="nav-links" href="">Animals</a>
                <a id="calm" class="nav-links " href="">Calm</a>
                <a id="couples" class="nav-links " href="">Couples</a>
                <a id="dark" class="nav-links " href="">Dark</a>
                <a id="football" class="nav-links " href="">Football</a>
                <a class="nav-link " href="http://127.0.0.1:5501/src/pages/Auth/login.html">Sign In</a>
                <a class="nav-link " href="http://127.0.0.1:5501/src/pages/Auth/register.html">Sign Up</a>
                <a id="showAll_btn" class="nav-link " href="">allllll</a>
            </div>
        </div>
    </nav>
  </>
}
