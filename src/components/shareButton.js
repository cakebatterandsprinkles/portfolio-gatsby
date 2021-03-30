import React from "react"
import { toast } from "react-toastify"
import shareButtonImage from "../images/main/share.svg"
import styles from "./shareButton.module.scss"

const shareButton = props => {
  const shareHandler = () => {
    navigator.clipboard.writeText(props.link)
    toast.warning("‎️‍🔥 Link copied to clipboard!")
  }
  return (
    <img
      src={shareButtonImage}
      alt="share button"
      className={styles.shareButton}
      onClick={shareHandler}
    />
  )
}

export default shareButton
