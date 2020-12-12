import React from "react"
import styles from "./CardFront.module.scss"

const CardFront = props => {
  return (
    <div
      className={`${styles[props.cardStyle]} ${styles.frontside}`}
      onClick={props.onClick}
      onKeyDown={() => {}}
      aria-hidden="true"
    >
      {props.children}
    </div>
  )
}
export default CardFront
