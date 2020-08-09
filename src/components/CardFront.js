import React from "react"
import styles from "./CardFront.module.scss"

const CardFront = props => {
  return (
    <div
      className={`${styles[props.style]} ${styles.frontside}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}
export default CardFront
