import React from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"
import tempCat from "../images/main/tempcat.jpg"
import linkedin from "../images/main/social-1_round-linkedin.svg"
import github from "../images/main/social-1_round-github.svg"
import twitter from "../images/main/social-1_round-twitter.svg"
import mail from "../images/main/envelope.svg"

const Navigation = () => {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.imgWrapper}>
        <img src={tempCat} alt="me" className={styles.img} />
      </div>
      <nav className={styles.navList}>
        <p>
          <Link to="/" className={styles.heading}>
            Yagmur C. Tas
          </Link>
        </p>
        <div className={styles.hr}></div>
        <ul className={styles.navlinkContainer}>
          <li>
            <div className={`${styles.point} ${styles.yellow}`}></div>
            <Link
              to="/"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Portfolio{" "}
            </Link>
          </li>
          <li>
            <div className={`${styles.point} ${styles.orange}`}></div>
            <Link
              to="/blog"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Blog
            </Link>
          </li>
          <li>
            <div className={`${styles.point} ${styles.crimson}`}></div>
            <Link
              to="/gallery"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Gallery
            </Link>
          </li>
          <li>
            <div className={`${styles.point} ${styles.green}`}></div>
            <Link
              to="/about"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              About Me{" "}
            </Link>
          </li>
        </ul>
        <div>
          <a href="https://github.com/cakebatterandsprinkles" target="_blank">
            <img src={github} alt="github icon" className={styles.socialIcon} />
          </a>
          <a href="https://twitter.com/modaijoubu" target="_blank">
            <img
              src={twitter}
              alt="twitter icon"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yagmur-cetin-tas/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin icon"
              className={styles.socialIcon}
            />
          </a>
          <a href="mailto:yagmurcetin@gmail.com" target="_blank">
            <img src={mail} alt="mail icon" className={styles.mailIcon} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
