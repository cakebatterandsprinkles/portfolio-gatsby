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
          <p>Which version would you like?</p>
          <div className={styles.queryWrapper}>
            <button className={styles.timeLink} onClick={() => setText("long")}>
              <img src={coffee} alt="coffee img" className={styles.icon} />
              "I have time"
            </button>{" "}
            <button
              className={styles.timeLink}
              onClick={() => setText("short")}
            >
              <img src={watch} alt="watch img" className={styles.icon} />
              "make it short"
            </button>
          </div>

          {text === "" ? null : (
            <div className={styles.aboutMe}>
              {text === "short" ? (
                <p>
                  I am a{" "}
                  <span className={styles.orange}>front end web developer</span>{" "}
                  living in Orlando, Florida. I happen to have an immense
                  curiosity for many things in life, such as{" "}
                  <span className={styles.crimson}>neuroscience</span>,{" "}
                  <span className={styles.green}>computer science</span>,{" "}
                  <span className={styles.blue}>animal behaviour</span> and{" "}
                  <span className={styles.purple}>art</span>. I read a lot and
                  sometimes write a lot. Also I make things out of clay and ink
                  that I'm sometimes proud of.
                </p>
              ) : (
                "Loooong text here."
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
