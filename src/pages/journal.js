import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { tagStyles } from "../utility/blog"
import styles from "./journal.module.scss"
import bookmark from "../images/main/bookmark.svg"
import chevronRight from "../images/main/cheveron-right.svg"
import { createHaiku } from "../utility/functions"

const JournalPage = () => {
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
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  const allSortedPosts = posts.allMarkdownRemark.edges
    .sort(
      (a, b) =>
        new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
    )
    .map(post => post)

  const searchInput = useRef(null)
  const clearIcon = useRef(null)
  const [searchText, setSearchText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [tags, setTags] = useState([])
  const [years, setYears] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const pageSize = 10

  const [filteredPosts, setFilteredPosts] = useState(allSortedPosts)

  const searchResults =
    searchText.length === 0
      ? filteredPosts
      : filteredPosts.filter(
          post =>
            post.node.frontmatter.title.toLowerCase().includes(searchText) ||
            post.node.frontmatter.summary.toLowerCase().includes(searchText)
        )

  const pageCount = Math.ceil(searchResults.length / pageSize)

  const setCurrentTags = () => {
    let allTags = posts.allMarkdownRemark.edges.flatMap(
      post => post.node.frontmatter.tags
    )
    const currentTags = new Set(allTags)
    setTags(Array.from(currentTags))
  }

  const setAvailableYears = () => {
    let allYears = posts.allMarkdownRemark.edges.flatMap(post => {
      if (post.node.frontmatter.date) {
        return post.node.frontmatter.date.slice(0, 4)
      }
    })
    const availableYears = new Set(allYears)
    setYears(Array.from(availableYears).sort())
  }

  useEffect(() => {
    setCurrentTags()
    setAvailableYears()
  }, [posts])

  const handleClearClick = () => {
    searchInput.current.value = ""
    setIsVisible(false)
    setSearchText("")
  }

  const handleUserInput = e => {
    if (searchInput.current.value) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }

    if (e.key === "Enter") {
      setFilteredPosts(allSortedPosts)
      setSearchText(searchInput.current.value.toLowerCase())
    }
  }

  const getVisibilityClass = () => {
    if (isVisible) {
      return styles.clearIcon
    } else {
      return styles.invisible
    }
  }

  const filterPosts = tag => {
    let filteredList = []
    posts.allMarkdownRemark.edges.forEach(post => {
      if (
        post.node.frontmatter.tags &&
        post.node.frontmatter.tags.includes(tag)
      ) {
        filteredList.push(post)
      }
    })
    setCurrentPage(0)
    setFilteredPosts(filteredList)
    handleClearClick()
  }

  const restoreAllArticles = () => {
    setCurrentPage(0)
    setFilteredPosts(allSortedPosts)
    setSearchText("")
    handleClearClick()
  }

  const filterPostsByYear = year => {
    let filteredList = []
    posts.allMarkdownRemark.edges.forEach(post => {
      if (post.node.frontmatter.date.slice(0, 4) === year) {
        filteredList.push(post)
      }
    })
    setCurrentPage(0)
    setFilteredPosts(filteredList)
  }

  return (
    <Layout>
      {createHaiku()}
      <div className={styles.blogContainer}>
        <div className={styles.blogWrapper}>
          <h1 className={styles.mainHeading}>Journal</h1>
          <div className={styles.disclaimerText}>
            If you have copyright claims, mail me and I'll take it down. If you
            think I'm wrong about something, mail me, as I'd love to learn and
            discuss. Thanks for hanging around. You're cool.
          </div>
          <ul className={styles.articleList}>
            {searchResults
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((post, index) => {
                return (
                  <li key={index} className={styles.article}>
                    <Link
                      to={`/journal/${post.node.fields.slug}`}
                      className={styles.link}
                    >
                      <div className={styles.articleTitleAndDateWrapper}>
                        <span className={styles.articleTitle}>
                          {post.node.frontmatter.title}
                        </span>
                        <span className={styles.articleDate}>
                          {post.node.frontmatter.date}
                        </span>
                      </div>
                    </Link>
                    <div className={styles.summaryContainer}>
                      {post.node.frontmatter.summary}
                    </div>
                    <div className={styles.tagContainer}>
                      <img
                        src={bookmark}
                        className={styles.bookmarkIcon}
                        alt="bookmark icon"
                      />
                      {post.node.frontmatter.tags
                        ? post.node.frontmatter.tags.map((tag, index) => {
                            return (
                              <p
                                className={
                                  tagStyles[tag]
                                    ? `${tagStyles[tag]} ${styles.tag}`
                                    : `${tagStyles["default"]} ${styles.tag}`
                                }
                                key={index}
                              >
                                {tag}
                              </p>
                            )
                          })
                        : null}
                    </div>
                  </li>
                )
              })}
          </ul>
          {pageCount > 1 ? (
            <div className={styles.paginationButtonContainer}>
              <div
                className={styles.leftarrow}
                onClick={() =>
                  setCurrentPage(
                    currentPage === 0 ? currentPage : currentPage - 1
                  )
                }
              >
                ◄
              </div>
              {Array.from({ length: pageCount }).map((d, i) => (
                <button
                  className={
                    i === currentPage
                      ? styles.activePaginationButton
                      : styles.paginationButton
                  }
                  onClick={() => setCurrentPage(i)}
                  key={i}
                >
                  <span className={styles.paginationAlignment}>{i + 1}</span>
                </button>
              ))}
              <div
                className={styles.rightarrow}
                onClick={() =>
                  setCurrentPage(
                    currentPage === pageCount - 1
                      ? pageCount - 1
                      : currentPage + 1
                  )
                }
              >
                ►
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.sidebar}>
          <div className={styles.searchWrapper}>
            <img
              className={styles.searchIcon}
              alt="search"
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
              className={getVisibilityClass()}
              ref={clearIcon}
              onClick={handleClearClick}
              onKeyDown={() => {}}
              aria-hidden="true"
              alt="clear"
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
                        className={
                          tagStyles[tag]
                            ? `${tagStyles[tag]} ${styles.tag}`
                            : `${tagStyles["default"]} ${styles.tag}`
                        }
                        key={index}
                        onClick={() => filterPosts(tag)}
                        onKeyDown={() => {}}
                        aria-hidden="true"
                      >
                        {tag}
                      </span>
                    )
                  })
                : "No posts to review!"}
            </div>
            <div
              className={styles.resetContainer}
              onClick={() => restoreAllArticles()}
              onKeyDown={() => {}}
              aria-hidden="true"
            >
              <img
                src={chevronRight}
                alt="chevron right"
                className={styles.chevronRightIcon}
              />
              <p className={styles.resetText}>View all articles</p>
            </div>
            <div className={styles.dateContainer}>
              <p className={styles.heading}>Years</p>
              <hr></hr>
              {years !== []
                ? years.map((year, index) => {
                    return (
                      <span
                        className={styles.year}
                        key={index}
                        onClick={() => filterPostsByYear(year)}
                        onKeyDown={() => {}}
                        aria-hidden="true"
                      >
                        {year}
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

export default JournalPage
