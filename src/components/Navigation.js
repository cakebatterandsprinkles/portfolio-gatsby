import React from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"

const Navigation = () => {
  return (
    <header>
      <div>
        <img />
      </div>
      <nav>
        <h1>
          <Link to="/" className={styles.heading}>
            Yagmur C. Tas
          </Link>
        </h1>
        <p className={styles.aboutMe}>
          Full stack web developer living in Orlando, Florida. Has an immense
          curiosity for many things in life. Reads a lot and sometimes writes a
          lot. Also makes things out of clay that she's sometimes proud of.
        </p>
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
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
