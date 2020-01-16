import React, { useEffect } from "react"

import "../styles/components/navbar.scss"
import { Link } from "gatsby"

const Navbar = () => {
  let i = 0
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn")

    navBtn.addEventListener("mouseover", function(e) {
      const cursor = document.getElementById("cursor")
      // cursor.style.display = "none"
      cursor.style.width = "50px"
      cursor.style.height = "50px"
      cursor.style.border = "1px solid #fff"
      cursor.style.background = "transparent"
    })

    navBtn.addEventListener("mouseout", function(e) {
      const cursor = document.getElementById("cursor")
      // cursor.style.display = "block"
      cursor.style.width = "10px"
      cursor.style.height = "10px"
      cursor.style.border = "1px solid transparent"
      cursor.style.background = "#fff"
    })
  })

  // Animate navbar panel
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn")
    const navTarget = document.querySelector("nav")
    const navLinks = document.querySelectorAll("#nav-target ul#nav-link li")
    navBtn.addEventListener("click", function() {
      if (i === 0) {
        navBtn.classList.add("active")
        navTarget.classList.add("active")
        // intro.style.opacity = "0"
        document.querySelector("html").style.overflowY = "hidden"
        i++

        //animate each navlinks with delay
        for (let index = 0; index < navLinks.length; index++) {
          navLinks[index].style.opacity = "1"
          navLinks[index].style.transition = ` .35s all ${1.75 +
            index / 4}s ease-in-out`
          navLinks[index].style.transform = "translateY(0)"

          navLinks[index].addEventListener("click", function() {
            //animate each navlinks with delay
            for (let index = navLinks.length - 1; index >= 0; index--) {
              navLinks[index].classList.remove("active")
              navLinks[index].style.opacity = "0"
              navLinks[index].style.transition = ` .35s all ${0 +
                (navLinks.length - 1 - index) / 4}s ease-in-out`
              navLinks[index].style.transform = "translateY(15px)"
            }
            navLinks[index].classList.add("active")

            setTimeout(() => {
              navBtn.classList.remove("active")
              navTarget.classList.remove("active")
              // intro.style.opacity = "1"
              document.querySelector("html").style.overflowY = "visible"
            }, 1000)

            i = 0
          })
        }
      } else {
        //animate each navlinks with delay
        for (let index = navLinks.length - 1; index >= 0; index--) {
          navLinks[index].style.opacity = "0"
          navLinks[index].style.transition = ` .35s all ${0 +
            (navLinks.length - 1 - index) / 4}s ease-in-out`
          navLinks[index].style.transform = "translateY(15px)"
        }

        setTimeout(() => {
          navBtn.classList.remove("active")
          navTarget.classList.remove("active")
          // intro.style.opacity = "1"
          document.querySelector("html").style.overflowY = "visible"
        }, 1000)

        i--
      }
    })

    return () => {
      i = 0
    }
  }, [i])

  // Animate navbar menu links onhover
  useEffect(() => {
    const cursor = document.querySelector("#cursor")
    const navLinks = document.querySelectorAll("#nav-target ul#nav-link li h3")
    Array.from(navLinks).forEach((item, index) => {
      navLinks[index].addEventListener("mouseenter", function() {
        cursor.style.padding = "20px"
        // cursor.style.display = "none"
      })
      navLinks[index].addEventListener("mouseout", function() {
        cursor.style.padding = "0"
        // cursor.style.display = "block"
      })
    })
  }, [])

  // Animate links clicked
  useEffect(() => {
    const cursor = document.querySelector("#cursor")
    const navLinks = document.querySelectorAll("#nav-target ul#nav-link li h3")
    Array.from(navLinks).forEach((item, index) => {
      navLinks[index].addEventListener("mouseenter", function() {
        cursor.style.padding = "20px"
        // cursor.style.display = "none"
      })
      navLinks[index].addEventListener("mouseout", function() {
        cursor.style.padding = "0"
        // cursor.style.display = "block"
      })
    })
  }, [])

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
          <ul id="nav-link">
            <li className="active">
              <sub>01</sub>
              <Link to="#">
                <h3 onClick={() => window.location.reload()}>Intro</h3>
              </Link>
            </li>
            <li>
              <sub>02</sub>
              <Link to="/">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <sub>03</sub>
              <Link to="#contact">
                <h3>Contact</h3>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
