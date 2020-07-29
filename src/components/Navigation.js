import React from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"
import tempCat from "../images/main/tempcat.jpg"

const Navigation = () => {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.imgWrapper}>
        <img src={tempCat} alt="me" className={styles.img} />
      </div>
      <nav className={styles.navList}>
        <h1>
          <Link to="/" className={styles.heading}>
            Yagmur C. Tas
          </Link>
        </h1>
        <ul className={styles.navlinkContainer}>
          <li>
            <Link
              to="/"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Portfolio{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              About Me{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
