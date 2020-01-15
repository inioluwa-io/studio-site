import React, { useEffect } from "react"
import "../styles/components/cursor.scss"

const Cursor = () => {
  const deactivateTapHighlight = e => {
    if (e.detail > 1) {
      e.preventDefault()
    }
  }
  const getMousePosition = e => {
    return { xAxis: e.clientX, yAxis: e.clientY }
  }

  const setMousePosition = e => {
    // alert(window);
    const mouse = getMousePosition(e)
    const cursor = document.getElementById("cursor")
    const ripple = document.getElementById("ripple")
    cursor.style.left = `${mouse.xAxis}px`
    cursor.style.top = `${mouse.yAxis}px`
    ripple.style.right = `${(mouse.xAxis/5)}px`
    ripple.style.bottom = `${mouse.yAxis/5}px`
    // cursor.style.transform = `translate(-50%,-50%)`
  }

  useEffect(() => {
    document.addEventListener("mousemove", function(e) {
      setMousePosition(e)
    })
    document.addEventListener("mousedown", function(e) {
      deactivateTapHighlight(e)
    })
    return () =>
      document.removeEventListener("mousemove", function(e) {
        setMousePosition(e)
      })
  })

  return (
    <>
      <div id="ripple"></div>
      <div id="cursor"></div>
    </>
  )
}
export default Cursor
