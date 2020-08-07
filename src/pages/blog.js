import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.scss"
import bookmark from "../images/main/bookmark.svg"

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
              summary
            }
          }
        }
      }
    }
  `)

  const searchInput = useRef(null)
  const clearIcon = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [tags, setTags] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(
    posts.allMarkdownRemark.edges.map(post => {
      return post
    })
  )

  const setCurrentTags = () => {
    let allTags = posts.allMarkdownRemark.edges.flatMap(post => {
      return post.node.frontmatter.tags
    })
    const currentTags = new Set(allTags)
    setTags(Array.from(currentTags))
  }

  useEffect(() => setCurrentTags(), [posts])

  const handleClearClick = () => {
    searchInput.current.value = ""
  }

  const handleUserInput = e => {
    if (searchInput.current.value) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    if (e.key === "Enter") {
      console.log("searching: " + searchInput.current.value)
    }
  }

  const changeVisibility = () => {
    if (isVisible) {
      return styles.clearIcon
    } else {
      return styles.invisible
    }
  }

  const chooseClass = tag => {
    let style
    switch (tag) {
      case "Javascript":
        style = styles.yellow
        break
      case "Programming":
        style = styles.orange
        break
      case "Japan":
        style = styles.crimson
        break
      case "Art":
        style = styles.green
        break
      case "History":
        style = styles.blue
        break
      case "Neuroscience":
        style = styles.purple
        break
      case "Ethology":
        style = styles.pink
        break
      default:
        style = styles.default
        break
    }
    return style
  }

  const filterPosts = tag => {
    let filteredList = []
    posts.allMarkdownRemark.edges.map(post => {
      if (post.node.frontmatter.tags.includes(tag)) {
        filteredList.push(post)
      }
    })
    setFilteredPosts(filteredList)
    console.log(filteredList)
  }

  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <ul className={styles.articleList}>
            {filteredPosts.map((post, index) => {
              return (
                <li key={index} className={styles.article}>
                  <div className={styles.articleTitleAndDateWrapper}>
                    <span className={styles.articleTitle}>
                      {post.node.frontmatter.title}
                    </span>
                    <span className={styles.articleDate}>
                      {post.node.frontmatter.date}
                    </span>
                  </div>
                  <div className={styles.summaryContainer}>
                    {post.node.frontmatter.summary}
                  </div>
                  <div className={styles.tagContainer}>
                    <img
                      src={bookmark}
                      className={styles.bookmarkIcon}
                      alt="bookmark icon"
                    />
                    {post.node.frontmatter.tags.map((tag, index) => {
                      return (
                        <p
                          className={`${chooseClass(tag)} ${styles.tag}`}
                          key={index}
                        >
                          {tag}
                        </p>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.searchWrapper}>
            <img
              className={styles.searchIcon}
              alt="search icon"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            />
            <input
              className={styles.search}
              ref={searchInput}
              type="text"
              onKeyUp={handleUserInput}
              placeholder="Search"
            />
            <img
              className={changeVisibility()}
              ref={clearIcon}
              onClick={handleClearClick}
              alt="clear icon"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
            />
          </div>
          <div className={styles.tagSideContainer}>
            <p className={styles.heading}>Tags</p>
            <hr></hr>
            <div className={styles.tagSideWrapper}>
              {tags !== []
                ? tags.map((tag, index) => {
                    return (
                      <span
                        className={`${chooseClass(tag)} ${styles.tag}`}
                        key={index}
                        onClick={() => filterPosts(tag)}
                      >
                        {tag}
                      </span>
                    )
                  })
                : "No posts to review!"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
