import React from "react"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import "../styles/index.scss"
import styles from "./Layout.module.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <Navigation />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
