import React from "react"
import Layout from "../components/Layout"
import styles from "./index.module.scss"
import MeInColor from "../images/gallery/digital_art/me_in_color.png"
import Lines from "../images/gallery/digital_art/IMG_0274.png"
import JustChoose from "../images/gallery/digital_art/IMG_0276.png"

const galleryPage = () => {
  return (
    <Layout>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioWrapper}>
          <h1>Art Gallery</h1>
          <div>
            Be a kind human and get permission before using my content. Thanks!
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <img src={MeInColor} alt="illustration of me" />
            </div>
            <div className={styles.card}>
              <img src={Lines} alt="illustration of me" />
            </div>
            <div className={styles.card}>
              <img src={JustChoose} alt="illustration of me" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default galleryPage
