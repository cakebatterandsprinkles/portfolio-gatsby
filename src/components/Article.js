import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Layout from "./Layout"
// import styles from "./Article.module.scss"

const ArticlePage = ({ post }) => {
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const summary = post.frontmatter.summary
  const tags = post.frontmatter.tags
  const content = post.html

  console.log(post)

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{summary}</p>
      <p>{tags}</p>
      <div>{content}</div>
    </div>
  )
}

export default ArticlePage
