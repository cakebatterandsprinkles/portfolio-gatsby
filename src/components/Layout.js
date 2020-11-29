import React, { useRef } from "react"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import "../styles/index.scss"
import styles from "./Layout.module.scss"
import robot from "../images/main/robot.png"

function transforms(x, y, el) {
  const constrain = window.innerWidth / 8
  let box = el.getBoundingClientRect()
  let calcX = -(y - box.y - box.height / 2) / constrain
  let calcY = (x - box.x - box.width / 2) / constrain

  return `perspective(200px)  
    rotateX(${calcX}deg)   
     rotateY(${calcY}deg) `
}

function transformElement(el, x, y) {
  el.style.transform = transforms(x, y, el)
}

const Layout = props => {
  const imageRef = useRef(null)

  React.useEffect(() => {
    const onMouseMove = event => {
      const { clientX, clientY } = event
      window.requestAnimationFrame(function () {
        transformElement(imageRef.current, clientX, clientY)
      })
    }

    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navigation />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>{props.children}</div>
        <div className={styles.imgContainer}>
          <img
            ref={imageRef}
            src={robot}
            alt="robot illustration hanging at the bottom of the page"
            className={styles.img}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
