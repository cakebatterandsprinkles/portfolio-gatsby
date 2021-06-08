import { ShareIcon } from "@heroicons/react/solid"
import React from "react"
import { toast } from "react-toastify"
import styles from "./shareButton.module.scss"

const shareButton = props => {
  const shareHandler = () => {
    navigator.clipboard.writeText(props.link)
    toast.warning("‎️‍🔥 Link copied to clipboard!")
  }
  return (
    <div
      onClick={shareHandler}
      className={styles.buttonWrapper}
      role="button"
      onKeyDown={e => {
        if (e.code === "Enter") shareHandler()
      }}
      tabIndex="0"
    >
      <ShareIcon className={styles.shareButton} />
    </div>
  )
}

export default shareButton
