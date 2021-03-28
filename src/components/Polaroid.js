import React from "react"
import styles from "./Polaroid.module.scss"

const Polaroid = props => {
  return (
    <div className={styles.polaroidContainer}>
      <div className={styles.imageContainer}>{props.children}</div>
      <div className={styles.infoContainer}>
        <div className={styles.cardHeader}>
          {props.name}, {props.year}
        </div>
        <div className={styles.subHeader}>{props.medium}</div>
        {props.studio ? (
          <div className={styles.subHeader}>
            Studio:{" "}
            <a href={props.link} className={styles.link} target="_blank" rel="noreferrer">
              {props.studio}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Polaroid
