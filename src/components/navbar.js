import React, { useEffect } from "react"

import "../styles/components/navbar.scss"
import { Link } from "gatsby"

const Navbar = () => {
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn")

    navBtn.addEventListener("mouseover", function(e) {
      const cursor = document.getElementById("cursor")
      cursor.style.display = "none"
      // cursor.style.width = "50px"
      // cursor.style.height = "50px"
    })

    navBtn.addEventListener("mouseout", function(e) {
      const cursor = document.getElementById("cursor")
      cursor.style.display = "block"
      // cursor.style.width = "10px"
      // cursor.style.height = "10px"
    })
  })

  // Animate navbar panel
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn")
    const navTarget = document.querySelector("nav")
    let i = 0
    navBtn.addEventListener("click", function() {
      if (i === 0) {
        navBtn.classList.add("active")
        navTarget.classList.add("active")
        document.querySelector("html").style.overflowY = 'hidden'
        i++
      } else {
        navBtn.classList.remove("active")
        navTarget.classList.remove("active")
        document.querySelector("html").style.overflowY = 'visible'
        i--
      }
    })
  })
  return (
    <>
      <div id="top-lay"></div>
      <header>
        <div id="logo">
          <Link to="/">Logo</Link>
        </div>
        <div id="nav-btn">
          <div id="nav-open"></div>
          <div id="nav-close"></div>
        </div>
      </header>
      <nav>
        <div id="nav-lay"></div>
        <div id="nav-target">

        </div>
      </nav>
    </>
  )
}

export default Navbar
