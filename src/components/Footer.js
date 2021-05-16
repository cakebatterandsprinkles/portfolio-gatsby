import { StarIcon } from "@heroicons/react/solid"
import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.infoContainer}>
        <p>© 2019-{new Date().getFullYear()} Yagmur C. Tas</p>
      </div>
      <div className={styles.infoContainer}>
        <StarIcon className={styles.starIcon} />
        Github:{" "}
        <a
          href="https://github.com/cakebatterandsprinkles/portfolio-gatsby"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          portfolio-gatsby
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/cakebatterandsprinkles"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          cakebatterandsprinkles
        </a>
      </div>
    </footer>
  )
}

export default Footer
