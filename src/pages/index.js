import React from "react"
import "../styles/app.scss"
import Cursor from "../components/cursor"
import Navbar from "../components/navbar"
import Loader from "../components/loader"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    if (
      /iPhone|iPad|Android|Blackberry|iPod/.test(window.navigator.userAgent)
    ) {
      document.querySelector("body").classList.add("ismobile")
    }
  })

  // Animate open contact
  useEffect(() => {
    const contactBtn = document.querySelector("#open-contact")
    contactBtn.addEventListener("click", function() {
      if (/active/.test(this.parentElement.classList.value)) {
        this.parentElement.classList.remove("active")
      } else {
        this.parentElement.classList.add("active")
      }
    })
  })

  // Animate hover contact
  useEffect(() => {
    const cursor = document.querySelector("#cursor")
    const contactBtn = document.querySelector("#contact-icons")
    contactBtn.addEventListener("mouseover", function() {
      cursor.style.width = "50px"
      cursor.style.height = "50px"
      cursor.style.border = "1px solid #fff"
      cursor.style.background = "transparent"
    })
    contactBtn.addEventListener("mouseout", function() {
      cursor.style.width = "10px"
      cursor.style.height = "10px"
      cursor.style.border = "1px solid transparent"
      cursor.style.background = "#fff"
    })

    return () => {
      contactBtn.addEventListener("mouseover", function() {
        cursor.style.width = "50px"
        cursor.style.height = "50px"
        cursor.style.border = "1px solid #fff"
        cursor.style.background = "transparent"
      })
      contactBtn.addEventListener("mouseout", function() {
        cursor.style.width = "10px"
        cursor.style.height = "10px"
        cursor.style.border = "1px solid transparent"
        cursor.style.background = "#fff"
      })
    }
  })

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Cursor />
        <section id="home">
          <div className="home-mess">
            <sub>- Hello, we are a</sub>
            <h1>
              <span>Design</span>-led technology studio.
            </h1>
          </div>

          <div id="sw-up">
            <div id="triangle" className="arrow arrow-down with-border"></div>
            {/* <p>Scroll up</p> */}
            {/* <div id="sw-bar"></div> */}
          </div>

          <div id="contact-icons">
            <ol reversed>
              <li>
                <a href="" target="_blank">
                  f
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  t
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  e
                </a>
              </li>
            </ol>
            <button id="open-contact">
              <div className="plus"></div>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
