import { StarIcon } from "@heroicons/react/solid"
import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.infoContainer}>
        <p>
          This work is licensed under{" "}
          <a
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            CC BY-NC-ND 4.0
          </a>
          .
        </p>
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
