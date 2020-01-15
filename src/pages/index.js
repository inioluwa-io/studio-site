import React from "react"
import "../styles/app.scss"
import Cursor from "../components/cursor"
import Navbar from "../components/navbar"
import Loader from "../components/loader"

const IndexPage = () => {
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
      </main>
    </>
  )
}

export default IndexPage
