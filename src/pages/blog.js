import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <div>
          <h1>Blog</h1>
          <ol>
            {posts.allMarkdownRemark.edges.map(post => {
              return (
                <li>
                  <p>{post.node.frontmatter.title}</p>
                  <p>{post.node.frontmatter.date}</p>
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
