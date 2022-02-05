import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import { createHaiku } from "../utility/functions"
import styles from "./404.module.scss"
import journalStyles from "./index.module.scss"

const Page404 = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found | Yagmur Cetin Tas</title>
      </Helmet>
      {createHaiku()}
      <div className={journalStyles.blogContainer}>
        <div className={`${journalStyles.blogWrapper} ${styles.blogWrapper}`}>
          <div className={styles.contentWrapper}>
            <div className={styles.infoWrapper}>
              <div className={styles.header}>404</div>
              <div className={styles.text}>
                Well, it looks like the content you're looking for is not here.
                Maybe try something else?
              </div>
            </div>
            <StaticImage
              src="../images/main/img404.jpg"
              alt="404"
              className={styles.big404Img}
              width={800}
              placeholder="tracedSVG"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page404
