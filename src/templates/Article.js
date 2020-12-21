import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import styles from "../pages/journal.module.scss"
import articleStyle from "./Article.module.scss"

const ArticlePage = props => {
  console.log(props)
  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div className={articleStyle.headerContainer}>
            <div className={articleStyle.mainHeader}>
              {props.pageContext.metadata.title}
            </div>
            <div className={articleStyle.date}>
              {props.pageContext.metadata.date}
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
