import React from "react"
import "../styles/app.scss"
import Cursor from "../components/cursor"
import Navbar from "../components/navbar"
import Loader from "../components/loader"
import { useEffect } from "react"

const IndexPage = () => {

  useEffect(()=>{
    
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
            <p>Scroll up</p>
            <div id="sw-bar"></div>
          </div>
        </section>
        <section id="contact">
          <div className="home-mess">
            <sub>- Hello, we are a</sub>
            <h1>
              <span>Design</span>-led technology studio.
            </h1>
          </div>

          <div id="sw-up">
            <p>Scroll up</p>
            <div id="sw-bar"></div>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
