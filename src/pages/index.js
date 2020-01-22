import React from "react"
import "../styles/app.scss"
import "../styles/pages/aboutus.scss"
import "../styles/layout/flexbox.scss"
import Cursor from "../components/cursor"
import Navbar from "../components/navbar"
import Loader from "../components/loader"
import { useEffect } from "react"
import Stars from "../components/stars"
import ScrollMagic from "../components/scrollmagic"
// import Planet from "../components/planet"

const IndexPage = () => {
  useEffect(() => {
    if (
      /iPhone|iPad|Android|Blackberry|iPod/.test(window.navigator.userAgent)
    ) {
      document.querySelector("body").classList.add("ismobile")
      document.querySelector("body").classList.remove("isnotmobile")
    } else {
      document.querySelector("body").classList.remove("ismobile")
      document.querySelector("body").classList.add("isnotmobile")
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
  }, [])

  // Animate open contact
  useEffect(() => {
    const trigger = document.querySelector("#expertise")
    const trigger1 = document.querySelector("#contactus")
    const ripple = document.getElementById("ripple")
    const stars = document.getElementById("stars1")
    const scrollMessage = document.querySelector("#sw-up")
    const scene1 = new ScrollMagic({ trigger, hook: 0.85 })
    scene1.on(
      function() {
        console.log('aaa')
        ripple.classList.add("right")
        stars.style.transform = "translate(-100px, -50px)"
        scrollMessage.classList.add("hide")
      },
      function() {
        ripple.classList.remove("right")
        stars.style.transform = "translate(0px)"
        scrollMessage.classList.remove("hide")
      }
    )
    const scene2 = new ScrollMagic({ trigger: trigger1, hook: 0.7 })
    scene2.on(
      function() {
        ripple.classList.add("show-contact-left")
        stars.style.transform = "translate(100px, -50px)"
        scrollMessage.classList.add("hide")
      },
      function() {
        ripple.classList.remove("show-contact-left")
        scrollMessage.classList.remove("hide")
      }
    )
    console.log(scene1,scene2)
  }, [])

  // Animate hover contact
  useEffect(() => {
    const cursor = document.querySelector(".isnotmobile #cursor")
    const contactBtn = document.querySelector("#contact-icons")
    contactBtn.addEventListener("mouseover", function() {
      if (cursor) {
        cursor.style.width = "50px"
        cursor.style.height = "50px"
        cursor.style.border = "1px solid #fff"
        cursor.style.background = "transparent"
      }
    })
    contactBtn.addEventListener("mouseout", function() {
      if (cursor) {
        cursor.style.width = "10px"
        cursor.style.height = "10px"
        cursor.style.border = "1px solid transparent"
        cursor.style.background = "#fff"
      }
    })
  })

  // on arrow hover
  // useEffect(() => {
  //   const cursor = document.querySelector("#cursor")
  //   const contactBtn = document.querySelector("#triangle")
  //   contactBtn.addEventListener("mouseover", function() {
  //     cursor.style.display = "none"
  //   })
  //   contactBtn.addEventListener("mouseout", function() {
  //     cursor.style.display = "block"
  //   })
  // })

  return (
    <>
      <Stars quantity={30} />
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
            {/* <Link to="/"> */}
            {/* <div id="triangle" className="arrow arrow-down with-border"></div> */}
            <p>Scroll up</p>
            <div id="sw-bar"></div>
            {/* </Link> */}
          </div>

          <div id="contact-icons">
            <ol reversed>
              <li>
                <a href="/" target="_blank">
                  f
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  t
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  e
                </a>
              </li>
            </ol>
            <button id="open-contact">
              <div className="plus"></div>
            </button>
          </div>
        </section>

        <section id="about-us">
          <section id="expertise" className="row">
            <div className="col-5">
              <h3>EXPERTISE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptatem, aliquam dolore numquam assumenda rem
                recusandae nobis, illum accusamus qui earum asperiores tenetur
                illo labore perspiciatis molestias. Harum, necessitatibus
                corporis.
              </p>

              <ul className="row" id ="wwd">
                <li className="col-5">
                  <h4>TECHNOLOGY</h4>
                  <ul>
                    <li>Website design</li>
                    <li>Front-end development</li>
                    <li>Back-end development</li>
                  </ul>
                </li>
                <li className="col-5">
                  <h4>CREATIVE & DESIGN</h4>
                  <ul>
                    <li>Illustration</li>
                    <li>2D animation</li>
                    <li>User experience design</li>
                    <li>User interface & Interactive design</li>
                    <li>Branding</li>
                    <li>Digital concept</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section id="contactus">
          <section id="expertise" className="row">
            <div className="col-5"></div>
            <div className="col-5">
              <h3>EXPERTISE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptatem, aliquam dolore numquam assumenda rem
                recusandae nobis, illum accusamus qui earum asperiores tenetur
                illo labore perspiciatis molestias. Harum, necessitatibus
                corporis.
              </p>

              <ul className="row" id ="wwd">
                <li className="col-5">
                  <h4>TECHNOLOGY</h4>
                  <ul>
                    <li>Website design</li>
                    <li>Front-end development</li>
                    <li>Back-end development</li>
                  </ul>
                </li>
                <li className="col-5">
                  <h4>CREATIVE & DESIGN</h4>
                  <ul>
                    <li>Illustration</li>
                    <li>2D animation</li>
                    <li>User experience design</li>
                    <li>User interface & Interactive design</li>
                    <li>Branding</li>
                    <li>Digital concept</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default IndexPage
