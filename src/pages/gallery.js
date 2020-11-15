import React from "react"
import Layout from "../components/Layout"
import styles from "./gallery.module.scss"
import Polaroid from "../components/Polaroid"
import MeInColor from "../images/gallery/digital_art/me_in_color.png"
import Lines from "../images/gallery/digital_art/IMG_0274.png"
import JustChoose from "../images/gallery/digital_art/IMG_0276.png"
import SocialDistance from "../images/gallery/digital_art/IMG_0277.png"

const galleryPage = () => {
  return (
    <Layout>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryWrapper}>
          <h1>Art Gallery</h1>
          <div>
            Be a kind human and get permission before using my content. Thanks!
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <Polaroid
                name="Self Portrait"
                year="2020"
                medium="Digital art made by using Procreate."
              >
                <img
                  src={MeInColor}
                  alt="digital illustration of myself in color"
                />
              </Polaroid>
            </div>
            <div className={styles.card}>
              <Polaroid
                name="Serene"
                year="2020"
                medium="Digital art made by using Procreate."
              >
                <img
                  src={Lines}
                  alt="digital illustration of power lines with weird colorful creatures"
                />
              </Polaroid>
            </div>
            <div className={styles.card}>
              <Polaroid
                name="Just Choose"
                year="2020"
                medium="Digital art made by using Procreate."
              >
                <img
                  src={JustChoose}
                  alt="digital illustration of a beach and road signs with weird creatures"
                />
              </Polaroid>
            </div>
            <div className={styles.card}>
              <Polaroid
                name="Social Distance"
                year="2020"
                medium="Digital art made by using Procreate."
              >
                <img
                  src={SocialDistance}
                  alt="digital illustration of humanity in 2020 social distancing"
                />
              </Polaroid>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default galleryPage
