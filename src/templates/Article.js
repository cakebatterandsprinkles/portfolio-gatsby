import { FireIcon } from "@heroicons/react/solid"
import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import ShareButton from "../components/shareButton"
import styles from "../pages/journal.module.scss"
import articleStyle from "./Article.module.scss"

const ArticlePage = props => {
  const [contributorName, setContributorName] = useState("")
  const [contributorAvatar, setContributorAvatar] = useState("")
  const [contributorGithubURL, setContributorGithubURL] = useState("")

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${props.pageContext.metadata.contributor}`
    )
      .then(res => res.json())
      .then(data => {
        setContributorName(data.name)
        setContributorAvatar(data.avatar_url)
        setContributorGithubURL(data.html_url)
      })
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>
          {props.pageContext.metadata.title} | cakebatterandsprinkles
        </title>
        <meta name="description" content={props.pageContext.metadata.summary} />
      </Helmet>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div className={articleStyle.headerContainer}>
            <div className={articleStyle.mainHeader}>
              {props.pageContext.metadata.title.toLowerCase()}
              <ShareButton
                link={`https://yagmurcetintas.com/journal/${props.pageContext.slug}`}
              />
            </div>
            <div className={articleStyle.date}>
              {props.pageContext.metadata.date}
              {props.pageContext.metadata.contributor ? (
                <div className={styles.contributorContainer}>
                  <FireIcon className={styles.contributorIcon} />
                  <p className={styles.contributorHeading}>Contributor:</p>
                  <a
                    href={contributorGithubURL}
                    target="_blank"
                    rel="noreferrer"
                    className={articleStyle.articleContributorLink}
                  >
                    <div className={articleStyle.linkWrapper}>
                      <img
                        src={contributorAvatar}
                        alt="contributor avatar"
                        className={styles.contributorAvatar}
                      />
                      <p className={articleStyle.contributorName}>
                        {contributorName}
                      </p>
                    </div>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
          <div
            className={articleStyle.content}
            dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ArticlePage
