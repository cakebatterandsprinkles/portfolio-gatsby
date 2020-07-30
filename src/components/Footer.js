import React from "react"
import styles from "./Footer.module.scss"
import star from "../images/main/star-full.svg"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.infoContainer}>
        <p>© 2019-2020 Yagmur C. Tas</p>
      </div>
      <div className={styles.infoContainer}>
        <img src={star} alt="star icon" className={styles.starIcon} />
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
