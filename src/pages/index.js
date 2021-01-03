import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import Layout from "../components/Layout"
import styles from "./index.module.scss"
import CardFront from "../components/CardFront"
import CardBack from "../components/CardBack"

const PortfolioPage = () => {
  const [isFlipped1, setIsFlipped1] = useState(false)
  const [isFlipped2, setIsFlipped2] = useState(false)
  const [isFlipped3, setIsFlipped3] = useState(false)
  const [isFlipped4, setIsFlipped4] = useState(false)

  const ClickHandler1 = () => {
    setIsFlipped1(prevState => !prevState)
  }

  const ClickHandler2 = () => {
    setIsFlipped2(prevState => !prevState)
  }

  const ClickHandler3 = () => {
    setIsFlipped3(prevState => !prevState)
  }

  const ClickHandler4 = () => {
    setIsFlipped4(prevState => !prevState)
  }

  return (
    <Layout>
      {console.log(`

  🄽🄾🅃🄴 🅃🄾 🅈🄾🅄

_._███████████████ _
_ █████████████████ \\_
 ███████████████████  \\__     
█████████████████████    \\__   Let's get more flowers
_█________▄▄▄▄_▄▄▄▄_█          
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__███=█_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▀▀▀▀_ ▀▀▀_█ ✿ ✿ 
_█__█████___________█(\\|/) 
_____________██ ___________██ "I can write a haiku." I said
_____________█ ____________██ "I'm sure you can" he said
______________█ ___________██ And that's how you were born:
_______________██ _________██ 
___ ✿ ✿ _________██ _______██ Feisty, kind and warm
___(\\|/)___________██ _____██ World needs more fire not war
__________________██ ______██ Dedicate your heart
_________________███ ______██ 
______________████ ________██ You know how I am
___________█████ __________██ I'll make it better if I can
_________██████ ___________██ Let's get started then
_______██████ _____________██ - Yagmur

`)}
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioWrapper}>
          <h1 className={styles.heading}>Portfolio</h1>
          <div className={styles.disclaimerText}>
            My web development portfolio
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <ReactCardFlip
                isFlipped={isFlipped1}
                flipDirection="vertical"
                flipSpeedFrontToBack="2"
                flipSpeedBackToFront="2"
                containerStyle={{ width: "100%", height: "100%" }}
              >
                <CardFront cardStyle="whereiscovid" onClick={ClickHandler1}>
                  <p>whereiscovid</p>
                </CardFront>
                <CardBack cardStyle="backside" onClick={ClickHandler1}>
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
            </div>
            <div className={styles.card}>
              <ReactCardFlip
                isFlipped={isFlipped2}
                flipDirection="vertical"
                flipSpeedFrontToBack="2"
                flipSpeedBackToFront="2"
                containerStyle={{ width: "100%", height: "100%" }}
              >
                <CardFront cardStyle="mendokusai" onClick={ClickHandler2}>
                  <p>mendokusai</p>
                </CardFront>
                <CardBack cardStyle="backside" onClick={ClickHandler2}>
                  <p className={styles.cardTitle}>mendokusai</p>
                  <p className={styles.cardSummary}>
                    A todo list app for people who have problem planning their
                    days.
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
                        GeoIP Express.js MongoDB-Atlas Sendgrid Heroku
                      </span>
                    </p>
                  </div>
                </CardBack>
              </ReactCardFlip>
            </div>
            <div className={styles.card}>
              <ReactCardFlip
                isFlipped={isFlipped3}
                flipDirection="vertical"
                flipSpeedFrontToBack="2"
                flipSpeedBackToFront="2"
                containerStyle={{ width: "100%", height: "100%" }}
              >
                <CardFront cardStyle="mockingbird" onClick={ClickHandler3}>
                  <p>mockingbird</p>
                </CardFront>
                <CardBack cardStyle="backside" onClick={ClickHandler3}>
                  <p className={styles.cardTitle}>mockingbird</p>
                  <p className={styles.cardSummary}>
                    A 7 minute journal app for well-being.
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
                      href="https://github.com/cakebatterandsprinkles/mockingbird"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cardlink}
                    >
                      cakebatterandsprinkles/mockingbird
                    </a>
                  </div>
                  <div className={styles.cardWrapper}>
                    <p className={styles.cardLinkTitle}>
                      Technologies used:{" "}
                      <span id={styles.technologies}>
                        React.js react-router-dom react-redux Express.js
                        MongoDB-Atlas Sendgrid Heroku
                      </span>
                    </p>
                  </div>
                </CardBack>
              </ReactCardFlip>
            </div>
            <div className={styles.card}>
              <ReactCardFlip
                isFlipped={isFlipped4}
                flipDirection="vertical"
                flipSpeedFrontToBack="2"
                flipSpeedBackToFront="2"
                containerStyle={{ width: "100%", height: "100%" }}
              >
                <CardFront cardStyle="breakout" onClick={ClickHandler4}>
                  <p>breakout</p>
                </CardFront>
                <CardBack cardStyle="backside" onClick={ClickHandler4}>
                  <p className={styles.cardTitle}>breakout</p>
                  <p className={styles.cardSummary}>
                    Atari Breakout game remade with HTML5 Canvas API.
                  </p>
                  <hr className={styles.hr}></hr>
                  <div className={styles.cardWrapper}>
                    <p className={styles.cardLinkTitle}>Demo: </p>
                    <a
                      href="https://cakebatterandsprinkles.github.io/breakout/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cardlink}
                    >
                      cakebatterandsprinkles.github.io/breakout/
                    </a>
                  </div>
                  <div className={styles.cardWrapper}>
                    <p className={styles.cardLinkTitle}>Github: </p>
                    <a
                      href="https://github.com/cakebatterandsprinkles/breakout"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.cardlink}
                    >
                      cakebatterandsprinkles/breakout
                    </a>
                  </div>
                  <div className={styles.cardWrapper}>
                    <p className={styles.cardLinkTitle}>
                      Technologies used:{" "}
                      <span id={styles.technologies}>HTML5 Canvas API</span>
                    </p>
                  </div>
                </CardBack>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
