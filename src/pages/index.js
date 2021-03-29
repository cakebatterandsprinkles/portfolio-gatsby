import React, { Fragment } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import ReactCardFlip from "../components/ReactCardFlip"
import { createHaiku } from "../utility/functions"
import projects from "../utility/projects"
import styles from "./index.module.scss"

const PortfolioPage = () => {
  return (
    <Fragment>
      <Helmet>
        <link rel="prefetch" href="https://mendokusai.app" />
        <link rel="prefetch" href="https://whereiscovid.info" />
        <link rel="prefetch" href="https://mockingbird.yagmurcetintas.com" />
      </Helmet>

      <Layout>
        {createHaiku()}
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioWrapper}>
            <h1 className={styles.heading}>Portfolio</h1>
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
