import React, { useState } from "react"
import Layout from "../components/Layout"
import styles from "./about.module.scss"
import coffee from "../images/main/coffee.svg"
import watch from "../images/main/watch.svg"

function AboutPage() {
  const [text, setText] = useState("")
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <p className={styles.greeting}>Hello!</p>
          <button className={styles.timeLink} onClick={() => setText("long")}>
            <img src={coffee} alt="coffee img" className={styles.icon} />
            "I have time"
          </button>{" "}
          or{" "}
          <button className={styles.timeLink} onClick={() => setText("short")}>
            <img src={watch} alt="watch img" className={styles.icon} />
            "make it short"
          </button>
          ?
          {text === "" ? null : (
            <p className={styles.aboutMe}>
              {text === "short"
                ? "Front end web developer living in Orlando, Florida. Has an immense curiosity for many things in life. Reads a lot and sometimes writes a lot. Also makes things out of clay that she's sometimes proud of."
                : "Loooong text here."}
            </p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
