import React from "react"
import styles from "./CardFront.module.scss"

const CardFront = props => {
  return (
    <div
      className={styles.frontside}
      onClick={props.onClick}
      onKeyDown={() => {}}
      aria-hidden="true"
      style={{ display: "grid" }}
    >
      {props.image}
      <div
        className={styles.frontside}
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
export default CardFront
