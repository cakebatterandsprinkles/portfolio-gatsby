import React from "react"
import Layout from "../components/Layout"
import styles from "./gallery.module.scss"
import Polaroid from "../components/Polaroid"
import MeInColor from "../images/gallery/digital_art/me_in_color.png"
import Lines from "../images/gallery/digital_art/IMG_0274.png"
import JustChoose from "../images/gallery/digital_art/IMG_0276.png"
import SocialDistance from "../images/gallery/digital_art/IMG_0277.png"
import NeuronsWalking from "../images/gallery/digital_art/IMG_0371.png"
import ThisIsFine from "../images/main/img404.jpg"
import Kitsune from "../images/gallery/clay/kitsune_yagmur.jpg"
import StandingTall from "../images/gallery/clay/standingtall_yagmur-scaled.jpg"
import Kaonashi from "../images/gallery/clay/kaonashi_yagmur.jpg"
import WolfMask from "../images/gallery/clay/wolf_yagmur.png"
import { createHaiku } from "../utility/functions"

const GalleryPage = () => {
  const [section, setSection] = React.useState("digital")

  const changeSection = str => {
    setSection(str)
  }

  const sections = [
    { handle: "digital", title: "Digital" },
    { handle: "clay", title: "Clay" },
    { handle: "ink", title: "Ink" },
  ]

  const digitalWork = [
    {
      name: "Serene",
      year: "2020",
      medium: "Digital art made by using Procreate.",
      src: Lines,
      imgAlt:
        "digital illustration of power lines with weird colorful creatures",
    },
    {
      name: "Just Choose",
      year: "2020",
      medium: "Digital art made by using Procreate.",
      src: JustChoose,
      imgAlt:
        "digital illustration of a beach and road signs with weird creatures",
    },
    {
      name: "Neuron Riot",
      year: "2020",
      medium: "Digital art made by using Procreate.",
      src: NeuronsWalking,
      imgAlt: "digital illustration of neurons walking",
    },
    {
      name: "This is fine",
      year: "2020",
      medium: "Digital art made by using Procreate.",
      src: ThisIsFine,
      imgAlt:
        "digital illustration of a character surrounded by little versions of himself.",
    },
    {
      name: "Self Portrait",
      year: "2020",
      medium: "Digital art made by using Procreate.",
      src: MeInColor,
      imgAlt: "digital illustration of myself in color",
    },
    {
      name: "Social Distance",
      year: "2020",
      medium: "Digital art made by using Procreate.",
      src: SocialDistance,
      imgAlt: "digital illustration of humanity in 2020 social distancing",
    },
  ]

  const clayWork = [
    {
      name: "Kitsune",
      year: "2019",
      medium: "Cone 6 clay & underglaze.",
      src: Kitsune,
      imgAlt: "Clay mask of kitsune",
    },
    {
      name: "Kaonashi",
      year: "2019",
      medium: "Cone 6 clay & underglaze.",
      src: Kaonashi,
      imgAlt: "Clay mask of kaonashi",
    },
    {
      name: "Standing Tall",
      year: "2019",
      medium: "Cone 6 clay, underglaze & clear glaze.",
      src: StandingTall,
      imgAlt: "Small clay sculpture",
    },
    {
      name: "Wolf",
      year: "2019",
      medium: "Cone 10 clay & underglaze.",
      src: WolfMask,
      imgAlt: "Clay wolf mask",
    },
  ]

  const renderContent = () => {
    if (section === "digital") {
      return (
        <div className={styles.gridContainer}>
          {digitalWork.map((w, i) => (
            <div className={styles.card} key={`card-${i}`}>
              <Polaroid name={w.name} year={w.year} medium={w.medium}>
                <img src={w.src} alt={w.imgAlt} />
              </Polaroid>
            </div>
          ))}
        </div>
      )
    } else if (section === "clay") {
      return (
        <div className={styles.gridContainer}>
          {clayWork.map((w, i) => (
            <div className={styles.card} key={`claywork-${i}`}>
              <Polaroid name={w.name} year={w.year} medium={w.medium}>
                <img src={w.src} alt={w.imgAlt} />
              </Polaroid>
            </div>
          ))}
        </div>
      )
    }
  }

  React.useEffect(() => {
    renderContent()
  }, [section, renderContent])

  return (
    <Layout>
      {createHaiku()}
      <div className={styles.galleryContainer}>
        <div className={styles.galleryWrapper}>
          <h1 className={styles.heading}>Art Gallery</h1>
          <div className={styles.disclaimerText}>
            Be a kind human and get permission before using my content. Thanks!
          </div>
          <nav className={styles.navbar}>
            {sections.map((s, i) => (
              <div
                key={`section-${i}`}
                className={`${styles.navbarLink} ${
                  section === s.handle ? styles.activeLink : ""
                }`}
                onClick={() => changeSection(s.handle)}
              >
                {s.title}
              </div>
            ))}
          </nav>
          {renderContent()}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage
