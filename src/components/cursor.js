import React, { useEffect } from "react"
import "../styles/components/cursor.scss"

const Cursor = () => {
  useEffect(() => {
    const deactivateTapHighlight = e => {
      if (e.detail > 1) {
        e.preventDefault()
      }
    }
    const getMousePosition = e => {
      return { xAxis: e.clientX, yAxis: e.clientY }
    }

    const setMousePosition = e => {
      const random = Math.floor(Math.random() * (360 - 250)) + 250
      const width = Math.floor(Math.random() * (250 - 180)) + 180
      const height = Math.floor(Math.random() * (230 - 180)) + 180
      const borderRadius = Math.floor(Math.random() * (380 - 250)) + 250
      const mouse = getMousePosition(e)
      const cursor = document.getElementById("cursor")
      const ripple = document.getElementById("ripple")
      cursor.style.left = `${mouse.xAxis}px`
      cursor.style.top = `${mouse.yAxis}px`
      cursor.style.opacity = `1`
      ripple.style.right = `${mouse.xAxis / 5}px`
      ripple.style.bottom = `${mouse.yAxis / 5}px`
      ripple.style.filter = `blur(38px) saturate(${random}%)`
      ripple.style.width = `${width}px`
      ripple.style.height = `${height}px`
      ripple.style.borderRadius = `${borderRadius}px`
    }

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
  }, [])

  return (
    <>
      <div id="ripple"></div>
      <div id="cursor"></div>
    </>
  )
}
export default Cursor
