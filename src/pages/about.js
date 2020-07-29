import React, { useState } from "react"
import Layout from "../components/Layout"
import styles from "./about.module.scss"

function AboutPage() {
  const [text, setText] = useState("")
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <p className={styles.greeting}>Hello!</p>
          <button className={styles.timeLink} onClick={() => setText("long")}>
            "I have time"
          </button>{" "}
          or{" "}
          <button className={styles.timeLink} onClick={() => setText("short")}>
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
