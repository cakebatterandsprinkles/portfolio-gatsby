import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./Navigation.module.scss"
import me from "../images/main/me_in_color.png"
import linkedin from "../images/main/social-1_round-linkedin.svg"
import github from "../images/main/social-1_round-github.svg"
import twitter from "../images/main/social-1_round-twitter.svg"
import mail from "../images/main/envelope.svg"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgWrapper}>
        <img src={me} alt="me" className={styles.img} />
      </div>
      <nav className={styles.navList}>
        <p>
          <Link to="/" className={styles.heading}>
            {data.site.siteMetadata.author}
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
              to="/journal"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Journal
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
        <div className={styles.socialContainer}>
          <a
            href="https://github.com/cakebatterandsprinkles"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" className={styles.socialIcon} />
          </a>
          <a
            href="https://twitter.com/modaijoubu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/yagmur-cetin-tas/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" className={styles.socialIcon} />
          </a>
          <a
            href="mailto:yagmurcetin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="mail" className={styles.mailIcon} />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
