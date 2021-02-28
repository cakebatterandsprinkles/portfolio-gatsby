import React from "react"
import Layout from "../components/Layout"
import JumpingBoy from "../images/main/character404.png"
import TiredAdult from "../images/main/img404.jpg"
import { createHaiku } from "../utility/functions"
import styles from "./404.module.scss"
import journalStyles from "./journal.module.scss"

const Page404 = () => {
  return (
    <Layout>
      {createHaiku()}
      <div className={journalStyles.blogContainer}>
        <div className={`${journalStyles.blogWrapper} ${styles.blogWrapper}`}>
          <div className={styles.contentWrapper}>
            <div className={styles.infoWrapper}>
              <div className={styles.header}>404</div>
              <img
                src={JumpingBoy}
                alt="Pink leafy character jumping"
                className={styles.jumpingChild}
              />
              <div className={styles.text}>
                Well, it looks like the content you're looking for is not here.
                Maybe try something else?
              </div>
            </div>
            <img
              src={TiredAdult}
              alt="404"
              className={styles.big404Img}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page404
