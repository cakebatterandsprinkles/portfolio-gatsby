import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import Layout from "../components/Layout"
import styles from "./index.module.scss"
import CardFront from "../components/CardFront"
import CardBack from "../components/CardBack"

const PortfolioPage = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const ClickHandler = e => {
    e.preventDefault()
    setIsFlipped(prevState => !prevState)
  }

  return (
    <Layout>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioWrapper}>
          <h1>Portfolio</h1>
          <div className={styles.gridContainer}>
            <ReactCardFlip
              isFlipped={isFlipped}
              flipDirection="vertical"
              flipSpeedFrontToBack="2"
              flipSpeedBackToFront="2"
            >
              <CardFront style="whereiscovid" onClick={ClickHandler}>
                <p>whereiscovid</p>
              </CardFront>
              <CardBack style="whereiscovid" onClick={ClickHandler}>
                <p className={styles.cardTitle}>whereiscovid</p>
                <p className={styles.cardSummary}>
                  A COVID19 tracking app. This app provides recent information
                  about Coronavirus while visualizing data on Google Maps.
                </p>
                <hr className={styles.hr}></hr>
                <div className={styles.cardWrapper}>
                  <p className={styles.cardLinkTitle}>Demo: </p>
                  <a
                    href="https://whereiscovid.info/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardlink}
                  >
                    https://whereiscovid.info/
                  </a>
                </div>
                <div className={styles.cardWrapper}>
                  <p className={styles.cardLinkTitle}>Github: </p>
                  <a
                    href="https://github.com/cakebatterandsprinkles/whereiscovid"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardlink}
                  >
                    cakebatterandsprinkles/whereiscovid
                  </a>
                </div>
                <div className={styles.cardWrapper}>
                  <p className={styles.cardLinkTitle}>
                    Technologies used:{" "}
                    <span id={styles.technologies}>
                      React.js, react-router-dom, novelcovid API, pubmed API,
                      GeoIP, Google Maps API
                    </span>
                  </p>
                </div>
              </CardBack>
            </ReactCardFlip>
            <div className={styles.yellow}></div>
            <div className={styles.yellow}></div>
            <div className={styles.yellow}></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
