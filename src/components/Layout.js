import "@fontsource/anonymous-pro"
import "@fontsource/raleway"
import "@fontsource/raleway/600.css"
import "@fontsource/roboto-mono"
import "@fontsource/rock-salt"
import "@fontsource/share-tech-mono"
import "@fontsource/press-start-2p"
import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment, useRef } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import "../styles/index.scss"
import styles from "./Layout.module.scss"

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
    <Fragment>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Navigation />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>{props.children}</div>
          <div className={styles.imgContainer}>
            <div ref={imageRef}>
              <StaticImage
                src="../images/main/robot.png"
                alt="robot illustration hanging at the bottom of the page"
                className={styles.img}
                height={208}
                placeholder="none"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </Fragment>
  )
}

export default Layout
