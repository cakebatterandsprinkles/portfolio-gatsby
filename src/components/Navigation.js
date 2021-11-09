import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import beaker from "../images/main/beaker.svg"
import mail from "../images/main/envelope.svg"
import github from "../images/main/social-1_round-github.svg"
import linkedin from "../images/main/social-1_round-linkedin.svg"
import twitter from "../images/main/social-1_round-twitter.svg"
import spotify from "../images/main/spotify.svg"
import styles from "./Navigation.module.scss"

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
      <div className={styles.imgBorder}>
        <div className={styles.imgWrapper}>
          <StaticImage
            src="../images/main/me_in_color.png"
            alt="me"
            className={styles.img}
            placeholder="tracedSVG"
            loading="eager"
            width={208}
          />
        </div>
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
            <img
              src={github}
              alt="github"
              className={`${styles.socialIcon} ${styles.githubLink}`}
            />
          </a>
          <a
            href="https://twitter.com/modaijoubu"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              className={`${styles.socialIcon} ${styles.twitterLink}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yagmur-cetin-tas/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className={`${styles.socialIcon} ${styles.linkedinLink}`}
            />
          </a>
          <a
            href="https://scholar.google.com/citations?user=wJctGgcAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={beaker}
              alt="google scholar link"
              className={`${styles.socialIcon} ${styles.scienceLink}`}
            />
          </a>
          <a
            href="mailto:yagmurcetin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mail}
              alt="mail"
              className={`${styles.mailIcon} ${styles.mailLink}`}
            />
          </a>
          <a
            href="https://open.spotify.com/playlist/3TfdGxK3hPKiVXef3JIOt2?si=903b78b4551f43fc"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={spotify}
              alt="mail"
              className={`${styles.socialIcon} ${styles.spotifyLink}`}
            />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
