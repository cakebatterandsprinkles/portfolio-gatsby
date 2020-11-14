import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import styles from "../pages/blog.module.scss"
import articleStyle from "./Article.module.scss"

const ArticlePage = props => {
  console.log(props)
  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div>
            {props.pageContext.metadata.title} -{" "}
            {props.pageContext.metadata.date}
            {props.pageContext.metadata.tags}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: props.pageContext.content }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ArticlePage
