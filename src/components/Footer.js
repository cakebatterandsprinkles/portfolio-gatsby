import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>© 2019-2020 Yagmur C. Tas</p>
      <p>
        Github:{" "}
        <a
          href="https://github.com/cakebatterandsprinkles/portfolio-gatsby"
          target="_blank"
          rel="noreferrer"
        >
          portfolio-gatsby
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/cakebatterandsprinkles"
          target="_blank"
          rel="noreferrer"
        >
          cakebatterandsprinkles
        </a>
      </p>
    </footer>
  )
}

export default Footer
