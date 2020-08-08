import React from "react"
import styles from "./CardBack.module.scss"

const CardBack = props => {
  return (
    <div className={styles[props.style]} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default CardBack
