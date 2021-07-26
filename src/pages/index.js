import React, { Fragment } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import ReactCardFlip from "../components/ReactCardFlip"
import ShareButton from "../components/shareButton"
import { createHaiku } from "../utility/functions"
import projects from "../utility/projects"
import styles from "./index.module.scss"

const PortfolioPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Portfolio | Yagmur Cetin Tas</title>
        <link rel="prefetch" href="https://mendokusai.app" />
        <link rel="prefetch" href="https://whereiscovid.info" />
        <link rel="prefetch" href="https://mockingbird.yagmurcetintas.com" />
      </Helmet>

      <Layout>
        {createHaiku()}
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioWrapper}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>Portfolio</h1>
              <ShareButton link="https://yagmurcetintas.com/" />
            </div>
            <div className={styles.disclaimerText}>
              My web development portfolio
            </div>
            <div className={styles.gridContainer}>
              {projects.map((p, i) => {
                return (
                  <ReactCardFlip
                    name={p.name}
                    summary={p.summary}
                    demoLink={p.demoLink}
                    repoLink={p.repoLink}
                    repoName={p.repoName}
                    image={p.image}
                    technologies={p.technologies}
                    key={`${p.name}-${i}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default PortfolioPage
