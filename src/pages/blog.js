import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.scss"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
          }
        }
      }
    }
  `)

  const chooseClass = tag => {
    let style
    switch (tag) {
      case "cats":
        style = styles.yellow
        break
      case "english":
        style = styles.crimson
        break
      case "science":
        style = styles.green
        break
      default:
        style = styles.tag
        break
    }
    return style
  }

  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <div className={styles.controllers}></div>
          <h1>Blog</h1>
          <ol>
            {posts.allMarkdownRemark.edges.map((post, index) => {
              return (
                <li key={index}>
                  <p>{post.node.frontmatter.title}</p>
                  <p>{post.node.frontmatter.date}</p>
                  <div className={styles.tagContainer}>
                    {post.node.frontmatter.tags.map((tag, index) => {
                      return (
                        <p className={chooseClass(tag)} key={index}>
                          {tag}
                        </p>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
