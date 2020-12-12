import React from "react"
import styles from "./CardBack.module.scss"

const CardBack = props => {
  return (
    <div
      className={styles[props.cardStyle]}
      onClick={props.onClick}
      onKeyDown={() => {}}
      aria-hidden="true"
    >
      {props.children}
    </div>
  )
}

export default CardBack
