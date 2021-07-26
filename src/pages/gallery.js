import React, { useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import Polaroid from "../components/Polaroid"
import ShareButton from "../components/shareButton"
import { clayWork, digitalWork, inkWork, sections } from "../utility/artworks"
import { createHaiku } from "../utility/functions"
import styles from "./gallery.module.scss"

const GalleryPage = () => {
  const [section, setSection] = useState("digital")
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 10
  const pageCountDigital = Math.ceil(digitalWork.length / pageSize)
  const pageCountClay = Math.ceil(clayWork.length / pageSize)
  const pageCountInk = Math.ceil(inkWork.length / pageSize)

  const changeSection = str => {
    setSection(str)
    setCurrentPage(0)
  }

  const renderContent = React.useCallback(() => {
    if (section === "digital") {
      return (
        <div className={styles.gridContainer}>
          {digitalWork
            .sort((a, b) => a.date - b.date)
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((w, i) => (
              <div className={styles.card} key={`card-${i}`}>
                <Polaroid name={w.name} year={w.year} medium={w.medium}>
                  {w.image}
                </Polaroid>
              </div>
            ))}
          {pageCountDigital > 1
            ? Pagination(pageCountDigital, currentPage, setCurrentPage)
            : null}
        </div>
      )
    } else if (section === "clay") {
      return (
        <div className={styles.gridContainer}>
          {clayWork
            .sort((a, b) => a.date - b.date)
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((w, i) => (
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
                  {w.image}
                </Polaroid>
              </div>
            ))}
          {pageCountClay > 1
            ? Pagination(pageCountClay, currentPage, setCurrentPage)
            : null}
        </div>
      )
    } else if (section === "ink") {
      return (
        <div className={styles.gridContainer}>
          {inkWork
            .sort((a, b) => a.date - b.date)
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((w, i) => (
              <div className={styles.card} key={`inkwork-${i}`}>
                <Polaroid name={w.name} year={w.year} medium={w.medium}>
                  {w.image}
                </Polaroid>
              </div>
            ))}
          {pageCountInk > 1
            ? Pagination(pageCountInk, currentPage, setCurrentPage)
            : null}
        </div>
      )
    }
  }, [section, currentPage, pageCountDigital, pageCountInk, pageCountClay])

  return (
    <Layout>
      <Helmet>
        <title>Art Gallery | Yagmur Cetin Tas</title>
      </Helmet>
      {createHaiku()}
      <div className={styles.galleryContainer}>
        <div className={styles.galleryWrapper}>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>Art Gallery</h1>
            <ShareButton link="https://yagmurcetintas.com/gallery" />
          </div>
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
                aria-hidden="true"
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
