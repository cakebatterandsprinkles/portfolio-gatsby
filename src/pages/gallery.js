import React from "react"
import Layout from "../components/Layout"
import Polaroid from "../components/Polaroid"
import { clayWork, digitalWork, inkWork, sections } from "../utility/artworks"
import { createHaiku } from "../utility/functions"
import styles from "./gallery.module.scss"

const GalleryPage = () => {
  const [section, setSection] = React.useState("digital")

  const changeSection = str => {
    setSection(str)
  }

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
              <Polaroid
                name={w.name}
                year={w.year}
                medium={w.medium}
                studio={w.studio}
                link={
                  w.studio === "Crealde School of Art"
                    ? "http://crealde.org/"
                    : null
                }
              >
                <img src={w.src} alt={w.imgAlt} />
              </Polaroid>
            </div>
          ))}
        </div>
      )
    } else if (section === "ink") {
      return (
        <div className={styles.gridContainer}>
          {inkWork.map((w, i) => (
            <div className={styles.card} key={`inkwork-${i}`}>
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
