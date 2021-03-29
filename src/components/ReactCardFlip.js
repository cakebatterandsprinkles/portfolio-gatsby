import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import CardBack from "../components/CardBack"
import CardFront from "../components/CardFront"
import styles from "./ReactCardFlip.module.scss"

const ReactCardFlip = props => {
  const [isFlipped, setIsFlipped] = useState(false)
  const clickHandler = () => setIsFlipped(prevState => !prevState)

  return (
    <div className={styles.card}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedFrontToBack="2"
        flipSpeedBackToFront="2"
        containerStyle={{ width: "100%", height: "100%" }}
      >
        <CardFront cardStyle={props.name} onClick={clickHandler}>
          <p>{props.name}</p>
        </CardFront>
        <CardBack cardStyle="backside" onClick={clickHandler}>
          <p className={styles.cardTitle}>{props.name}</p>
          <p className={styles.cardSummary}>{props.summary}</p>
          <hr className={styles.hr}></hr>
          <div className={styles.cardWrapper}>
            <p className={styles.cardLinkTitle}>Demo: </p>
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className={styles.cardlink}
            >
              {props.demoLink}
            </a>
          </div>
          {props.repoName ? (
            <div className={styles.cardWrapper}>
              <p className={styles.cardLinkTitle}>Github: </p>
              <a
                href={props.repoLink}
                target="_blank"
                rel="noreferrer"
                className={styles.cardlink}
              >
                cakebatterandsprinkles/{props.repoName}
              </a>
            </div>
          ) : null}
          <div className={styles.cardWrapper}>
            <p className={styles.cardLinkTitle}>
              Technologies used:{" "}
              <span id={styles.technologies}>
                {props.technologies.join(" | ")}
              </span>
            </p>
          </div>
        </CardBack>
      </ReactCardFlip>
    </div>
  )
}

export default ReactCardFlip
