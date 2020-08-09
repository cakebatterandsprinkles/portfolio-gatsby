import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import Layout from "../components/Layout"
import styles from "./index.module.scss"
import CardFront from "../components/CardFront"
import CardBack from "../components/CardBack"

const PortfolioPage = () => {
  const [isFlipped1, setIsFlipped1] = useState(false)
  const [isFlipped2, setIsFlipped2] = useState(false)

  const ClickHandler1 = e => {
    e.preventDefault()
    setIsFlipped1(prevState => !prevState)
  }

  const ClickHandler2 = e => {
    e.preventDefault()
    setIsFlipped2(prevState => !prevState)
  }

  return (
    <Layout>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioWrapper}>
          <h1>Portfolio</h1>
          <div className={styles.gridContainer}>
            <ReactCardFlip
              isFlipped={isFlipped1}
              flipDirection="vertical"
              flipSpeedFrontToBack="2"
              flipSpeedBackToFront="2"
            >
              <CardFront style="whereiscovid" onClick={ClickHandler1}>
                <p>whereiscovid</p>
              </CardFront>
              <CardBack style="backside" onClick={ClickHandler1}>
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
            <ReactCardFlip
              isFlipped={isFlipped2}
              flipDirection="vertical"
              flipSpeedFrontToBack="2"
              flipSpeedBackToFront="2"
            >
              <CardFront style="mendokusai" onClick={ClickHandler2}>
                <p>mendokusai</p>
              </CardFront>
              <CardBack style="backside" onClick={ClickHandler2}>
                <p className={styles.cardTitle}>mendokusai</p>
                <p className={styles.cardSummary}>
                  A todo list app for people who have problem planning their
                  days. By dividing things you need to do in bite size pieces,
                  you can have a more productive day and feel more motivated and
                  satisfied at the end of the day.
                </p>
                <hr className={styles.hr}></hr>
                <div className={styles.cardWrapper}>
                  <p className={styles.cardLinkTitle}>Demo: </p>
                  <a
                    href="https://mendokusai.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardlink}
                  >
                    https://mendokusai.app/
                  </a>
                </div>
                <div className={styles.cardWrapper}>
                  <p className={styles.cardLinkTitle}>Github: </p>
                  <a
                    href="https://github.com/cakebatterandsprinkles/mendokusai-react"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardlink}
                  >
                    cakebatterandsprinkles/mendokusai-react
                  </a>
                </div>
                <div className={styles.cardWrapper}>
                  <p className={styles.cardLinkTitle}>
                    Technologies used:{" "}
                    <span id={styles.technologies}>
                      React.js react-router-dom react-redux OpenWeatherMapAPI
                      GeoIP Express.js MongoDB Atlas Sendgrid Heroku
                    </span>
                  </p>
                </div>
              </CardBack>
            </ReactCardFlip>
            <div className={styles.yellow}></div>
            <div className={styles.yellow}></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
