import React, { Fragment, useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import ShareButton from "../components/shareButton"
import { findCorrectAnnouncement, tidbitsArray } from "../utility/tidbits"
import { createHaiku } from "../utility/functions"
import ChevronRight from "../images/tidbits/chevronright.svg"
import ChevronLeft from "../images/tidbits/chevronleft.svg"
import styles from "./tidbits.module.scss"
import NotFound from "../components/NotFound"

const TidbitsPage = () => {
  const today = new Date();
  const [displayedMonth, setDisplayedMonth] = useState(today.getMonth());
  const [displayedYear, setDisplayedYear] = useState(today.getFullYear());

  const displayMonthName = (displayedMonth, displayedYear) => {
    const date = new Date(displayedYear, displayedMonth, 1);
    return date.toLocaleString('default', { month: 'long' });
  }

  const handleLeftChevronClick = () => {
    const date = new Date(displayedYear, displayedMonth, 1);
    date.setMonth(date.getMonth() - 1);
    setDisplayedMonth(date.getMonth());
    setDisplayedYear(date.getFullYear());
  }

  const handleRightChevronClick = () => {
    const date = new Date(displayedYear, displayedMonth, 1);
    date.setMonth(date.getMonth() + 1);
    setDisplayedMonth(date.getMonth());
    setDisplayedYear(date.getFullYear());
  }

  return (
    <Fragment>
      <Helmet>
        <title>Tidbits | Yagmur Cetin Tas</title>
      </Helmet>

      <Layout>
        {createHaiku()}
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioWrapper}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>Tidbits</h1>
              <ShareButton link="https://yagmurcetintas.com/tidbits" />
            </div>
            <div className={styles.disclaimerText}>
              Some stuff I want to share for no good reason
            </div>
            <div className={styles.dateContainer}>
              <img src={ChevronLeft} className={styles.chevronLeft} onClick={handleLeftChevronClick} />
              <p className={styles.date}>{displayMonthName(displayedMonth, displayedYear)}, {displayedYear}</p>
              <img src={ChevronRight} className={styles.chevronRight} onClick={handleRightChevronClick} />
            </div>
            <div className={styles.gridContainer}>
              {findCorrectAnnouncement(tidbitsArray, displayedMonth, displayedYear) ?
                findCorrectAnnouncement(tidbitsArray, displayedMonth, displayedYear).content.map((item, index) => {
                  return (
                    <div key={`${item.contentText.slice(0, 8)}-${index}`} className={styles.cardWrapper}>
                      <div className={styles.titleAndIconWrapper}>
                        <img src={item.icon} className={styles.icon} />
                        <p className={styles.title}>{item.title}</p>
                      </div>
                      <div className={styles.contentAndCreatorWrapper}>
                        {item.link ?
                          <a href={item.link}>
                            <div className={styles.contentText}>{item.contentText}</div>
                          </a>
                          :
                          <div className={styles.contentText}>{item.contentText}</div>}
                        {item.creator ? <div className={styles.creator}>— {item.creator}</div> : ''}
                      </div>
                      <div className={styles.comment}>{item.comment}</div>
                    </div>
                  )
                }) : <NotFound />}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default TidbitsPage
