import React from "react"
import Layout from "../components/Layout"
import ShareButton from "../components/shareButton"
import styles from "../pages/journal.module.scss"
import articleStyle from "./Article.module.scss"

const ArticlePage = props => {
  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div className={articleStyle.headerContainer}>
            <div className={articleStyle.mainHeader}>
              {props.pageContext.metadata.title}
              <ShareButton
                link={`https://yagmurcetintas.com/journal/${props.pageContext.slug}`}
              />
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
