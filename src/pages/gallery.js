import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import Polaroid from "../components/Polaroid"
import ShareButton from "../components/shareButton"
import RedBubbleIcon from "../images/main/redbubble-icon.png"
import { clayWork, digitalWork, inkWork, linocutWork, intaglioWork, sections } from "../utility/artworks"
import { createHaiku } from "../utility/functions"
import styles from "./gallery.module.scss"

const GalleryPage = () => {
  const [section, setSection] = useState("digital")
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 10
  const pageCountDigital = Math.ceil(digitalWork.length / pageSize)
  const pageCountClay = Math.ceil(clayWork.length / pageSize)
  const pageCountInk = Math.ceil(inkWork.length / pageSize)
  const pageCountLinocut = Math.ceil(linocutWork.length / pageSize)
  const pageCountIntaglio = Math.ceil(intaglioWork.length / pageSize)

  useEffect(() => {
    const handles = sections.map(section => section.handle)
    const hash = window.location.hash.slice(1)
    if (handles.includes(hash)) {
      setSection(hash)
    }
  }, [])

  const changeSection = str => {
    setSection(str)
    window.location.hash = str
    setCurrentPage(0)
  }

  const handleRedBubbleIconClick = () => {
    window.open("https://www.redbubble.com/people/yagmurcetintas/shop", '_blank');
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
    } else if (section === "linocut") {
      return (
        <div className={styles.gridContainer}>
          {linocutWork
            .sort((a, b) => a.date - b.date)
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((w, i) => (
              <div className={styles.card} key={`linocutwork-${i}`}>
                <Polaroid name={w.name} year={w.year} medium={w.medium}>
                  {w.image}
                </Polaroid>
              </div>
            ))}
          {pageCountLinocut > 1
            ? Pagination(pageCountLinocut, currentPage, setCurrentPage)
            : null}
        </div>
      )
    } else if (section === "intaglio") {
      return (
        <div className={styles.gridContainer}>
          {intaglioWork
            .sort((a, b) => a.date - b.date)
            .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
            .map((w, i) => (
              <div className={styles.card} key={`intaglioWork-${i}`}>
                <Polaroid name={w.name} year={w.year} medium={w.medium}>
                  {w.image}
                </Polaroid>
              </div>
            ))}
          {pageCountIntaglio > 1
            ? Pagination(pageCountIntaglio, currentPage, setCurrentPage)
            : null}
        </div>
      )
    }
  }, [section, currentPage, pageCountDigital, pageCountInk, pageCountClay, pageCountIntaglio, pageCountLinocut])

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
            <div className={styles.iconWrapper}>
              <img
                src={RedBubbleIcon}
                alt="RedBubble Icon"
                className={styles.icon}
                onClick={handleRedBubbleIconClick}
                aria-hidden="true"
              />
              <ShareButton link={`https://yagmurcetintas.com/gallery/#${section}`} />
            </div>
          </div>
          <div className={styles.disclaimerText}>
            Be a kind human and get permission before using my content. Thanks!
          </div>
          <nav className={styles.navbar}>
            {sections.map((s, i) => (
              <div
                key={`section-${i}`}
                className={`${styles.navbarLink} ${section === s.handle ? styles.activeLink : ""
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
