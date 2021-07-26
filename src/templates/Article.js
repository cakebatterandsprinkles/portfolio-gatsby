import { CalendarIcon } from "@heroicons/react/outline"
import { FireIcon } from "@heroicons/react/solid"
import { graphql } from "gatsby"
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

  const { fields, frontmatter, html } = props.data.markdownRemark

  useEffect(() => {
    if (frontmatter.contributor) {
      fetch(`https://api.github.com/users/${frontmatter.contributor}`)
        .then(res => res.json())
        .then(data => {
          setContributorName(data.name)
          setContributorAvatar(data.avatar_url)
          setContributorGithubURL(data.html_url)
        })
    }
  }, [frontmatter.contributor])

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | Yagmur Cetin Tas</title>
        <meta name="description" content={frontmatter.summary} />
      </Helmet>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div className={articleStyle.headerContainer}>
            <div className={articleStyle.mainHeader}>
              {frontmatter.title.toLowerCase()}
              <ShareButton
                link={`https://yagmurcetintas.com/journal/${fields.slug}`}
              />
            </div>
            <div className={articleStyle.date}>
              <div className={styles.dateContainer}>
                <CalendarIcon className={styles.dateIcon}/>{frontmatter.date}
              </div>
              {frontmatter.contributor ? (
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
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ArticlePage

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        tags
        summary
        contributor
      }
    }
  }
`
