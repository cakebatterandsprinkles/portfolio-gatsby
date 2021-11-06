import { FastForwardIcon, FilmIcon } from "@heroicons/react/outline"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import { createHaiku } from "../utility/functions"
import styles from "./about.module.scss"

function AboutPage() {
  const [text, setText] = useState("")
  return (
    <Layout>
      <Helmet>
        <title>About Me | Yagmur Cetin Tas</title>
      </Helmet>
      {createHaiku()}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <div className={styles.greetingContainer}>
            <StaticImage
              src="../images/main/character404.png"
              alt="pink character that represents the owner of the website"
              height={80}
              className={styles.childIcon}
              placeholder="none"
            />
            <p className={styles.greeting}>Hello!</p>
          </div>
          <div className={styles.buttonWrapper}>
            <p className={styles.query}>Which version would you like?</p>
            <div className={styles.queryWrapper}>
              <button
                className={`${styles.timeLink} ${text === "long" ? styles.buttonActive : ""}`}
                onClick={() => setText("long")}
              >
                <FilmIcon className={styles.icon} />
                "I have time"
              </button>{" "}
              <button
                className={`${styles.timeLink} ${text === "short" ? styles.buttonActive : ""}`}
                onClick={() => setText("short")}
              >
                <FastForwardIcon className={styles.icon} />
                "make it short and fancy"
              </button>
            </div>
          </div>
          {text === "" ? null : (
            <div className={styles.aboutMe}>
              {text === "short" ? (
                <div>
                  <p>Hi there! My name is Yagmur. Nice to meet you.</p>
                  <p>
                    I am a{" "}
                    <span className={`${styles.pink} ${styles.highlight}`}>
                      front end web developer
                    </span>{" "}
                    living in Orlando, Florida. </p>
                  <p>I frequently use{" "}
                    <span className={`${styles.yellow} ${styles.highlight}`}>
                      JavaScript
                    </span>
                    ,{" "}
                    <span className={`${styles.blue} ${styles.highlight}`}>
                      TypeScript
                    </span>
                    ,{" "}
                    <span className={`${styles.crimson} ${styles.highlight}`}>
                      React.js
                    </span>
                    ,{" "}
                    <span className={`${styles.blue} ${styles.highlight}`}>
                      Redux
                    </span>
                    , and in addition to these, I use{" "}
                    <span className={`${styles.green} ${styles.highlight}`}>
                      Express.js
                    </span>
                    ,{" "}
                    <span className={`${styles.purple} ${styles.highlight}`}>
                      Node.js
                    </span>
                    ,{" "}
                    <span className={`${styles.pink} ${styles.highlight}`}>
                      NestJS
                    </span>
                    ,{" "}
                    <span className={`${styles.orange} ${styles.highlight}`}>
                      MongoDB
                    </span>{" "}
                    and{" "}
                    <span className={`${styles.yellow} ${styles.highlight}`}>
                      various 3rd party API's
                    </span>{" "} in both personal an professional projects.
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
                    <span className={`${styles.orange} ${styles.highlight}`}>
                      art
                    </span>
                    ,{" "}
                    <span className={`${styles.blue} ${styles.highlight}`}>
                      linguistics
                    </span>
                    ,{" "}
                    <span className={`${styles.crimson} ${styles.highlight}`}>
                      history
                    </span>
                    {", "}
                    and{" "}
                    <span className={`${styles.green} ${styles.highlight}`}>
                      animal (mostly corvid or rodent) behaviour
                    </span>
                    . I read a lot and sometimes write a lot.
                  </p>
                  <p>
                    Also, I make things out of{" "}
                    <span className={`${styles.orange} ${styles.highlight}`}>
                      clay
                    </span>{" "}
                    and{" "}
                    <span className={`${styles.purple} ${styles.highlight}`}>
                      ink
                    </span>{" "}
                    that I'm sometimes proud of.
                  </p>
                </div>
              ) : (
                <div>
                  <div className={styles.longtext}>
                    <p>
                      Hello there! So glad to hear you have some time to spare.
                      Welcome to the weird career of mine.
                    </p>
                    <p>
                      I haven't been a developer my whole life. I would love to
                      tell you that I have coded since I was 5 or something, but
                      that wouldn't simply be true! In fact I have{" "}
                      <span
                        className={`${styles.longtextHighlight} ${styles.orange}`}
                      >
                        started learning programming around April, 2019.
                      </span>{" "}
                      I absolutely loved doing it, so I've been doing it ever
                      since.
                    </p>
                    <p>So let me tell you how I got here.</p>
                    <p>
                      <span
                        className={`${styles.longtextHighlight} ${styles.crimson}`}
                      >
                        I have a bachelor's degree in medicine. (Istanbul
                        University, Cerrahpasa School of Medicine, class of
                        2013){" "}
                      </span>
                      After finishing medical school, I've started working as a
                      neurology resident in one of the biggest mental health
                      hospitals in Turkey. It didn't take me long to understand
                      that the thing I loved about medicine was not patient
                      care, but the physiopathology of the diseases. How does a
                      brain hallucinate? Why do we prefer using one hand over
                      the other? Why are some people more prone to addiction
                      than the others? So many unanswered questions and every
                      one of them amazed me (they still do!).{" "}
                      <span
                        className={`${styles.longtextHighlight} ${styles.pink}`}
                      >
                        I realized that I would enjoy neuroscience more, so I
                        decided to attend grad school. (Koc University,
                        Neuroscience PhD Program)
                      </span>{" "}
                      During my PhD, have worked with animal models of
                      Parkinson's disease, hypertension, type 1 and 2 diabetes
                      and their effects on cognition and the microcirculation of
                      the brain tissue. I have seen and done some amazing things
                      and learned a lot, but it still didn't feel like home.
                      While writing my thesis I took various undergrad classes
                      from fine arts and graphic design faculties, and I learned
                      a lot from those as well.
                    </p>
                    <p>
                      <span
                        className={`${styles.longtextHighlight} ${styles.purple}`}
                      >
                        After finishing my PhD in 2018, we decided to move to
                        Florida.
                      </span>{" "}
                      I didn't want to be a medical researcher, but I wasn't
                      sure of what to do either. I tried various things, mostly
                      related to art and design.{" "}
                      <span
                        className={`${styles.longtextHighlight} ${styles.blue}`}
                      >
                        At 2019 I decided to make an online portfolio to
                        showcase some of the artwork I have done
                      </span>{" "}
                      and for me to do it the way I wanted to, I realized that I
                      needed to learn HTML, CSS and Javascript. This is where my
                      life changed. Programming was so much fun!
                    </p>
                    <p>
                      <span
                        className={`${styles.longtextHighlight} ${styles.green}`}
                      >
                        At May 2019 I attended UCF's Full Stack Web Development
                        Bootcamp
                      </span>{" "}
                      to hasten my learning process. I have been coding ever
                      since. I love the community and the ever changing
                      environment of computer science. I think I have finally
                      found home.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
