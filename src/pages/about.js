import React, { useState } from "react"
import Layout from "../components/Layout"
import styles from "./about.module.scss"
import coffee from "../images/main/coffee.svg"
import watch from "../images/main/time.svg"

function AboutPage() {
  const [text, setText] = useState("")
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <p className={styles.greeting}>Hello!</p>
          <p className={styles.query}>Which version would you like?</p>
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
                <div>
                  <p>
                    I am a{" "}
                    <span className={`${styles.orange} ${styles.highlight}`}>
                      front end web developer
                    </span>{" "}
                    living in Orlando, Florida. I frequently use{" "}
                    <span className={`${styles.yellow} ${styles.highlight}`}>
                      Javascript
                    </span>
                    ,{" "}
                    <span className={`${styles.crimson} ${styles.highlight}`}>
                      React.js
                    </span>
                    ,{" "}
                    <span className={`${styles.blue} ${styles.highlight}`}>
                      react-redux
                    </span>
                    ,{" "}
                    <span className={`${styles.green} ${styles.highlight}`}>
                      Express.js
                    </span>
                    ,{" "}
                    <span className={`${styles.purple} ${styles.highlight}`}>
                      Node.js
                    </span>
                    ,{" "}
                    <span className={`${styles.orange} ${styles.highlight}`}>
                      MongoDB
                    </span>{" "}
                    and{" "}
                    <span className={`${styles.yellow} ${styles.highlight}`}>
                      various 3rd party API's.
                    </span>{" "}
                  </p>
                  <p>
                    I happen to have an immense curiosity for many things in
                    life, such as{" "}
                    <span className={`${styles.crimson} ${styles.highlight}`}>
                      neuroscience
                    </span>
                    ,{" "}
                    <span className={`${styles.purple} ${styles.highlight}`}>
                      computer science
                    </span>
                    ,{" "}
                    <span className={`${styles.green} ${styles.highlight}`}>
                      animal behaviour
                    </span>{" "}
                    and{" "}
                    <span className={`${styles.blue} ${styles.highlight}`}>
                      art
                    </span>
                    . I read a lot and sometimes write a lot. Also I make things
                    out of clay and ink that I'm sometimes proud of.
                  </p>
                </div>
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
