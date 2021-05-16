import {
  BookmarkIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  SearchIcon,
  XCircleIcon,
} from "@heroicons/react/solid"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/Layout"
import ShareButton from "../components/shareButton"
import { tagStyles } from "../utility/blog"
import { createHaiku } from "../utility/functions"
import styles from "./journal.module.scss"

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

  const searchResults = () => {
    return searchText.length === 0
      ? filteredPosts
      : filteredPosts.filter(
          post =>
            post.node.frontmatter.title.toLowerCase().includes(searchText) ||
            post.node.frontmatter.summary.toLowerCase().includes(searchText)
        )
  }

  const pageCount = Math.ceil(filteredPosts.length / pageSize)

  const setCurrentTags = React.useCallback(() => {
    let allTags = posts.allMarkdownRemark.edges.flatMap(
      post => post.node.frontmatter.tags
    )
    const currentTags = new Set(allTags)
    setTags(Array.from(currentTags))
  }, [posts.allMarkdownRemark.edges])

  const setAvailableYears = React.useCallback(() => {
    let allYears = posts.allMarkdownRemark.edges.flatMap(post => {
      if (post.node.frontmatter.date) {
        return post.node.frontmatter.date.slice(0, 4)
      }
      return []
    })
    const availableYears = new Set(allYears)
    setYears(Array.from(availableYears).sort())
  }, [posts.allMarkdownRemark.edges])

  useEffect(() => {
    setCurrentTags()
    setAvailableYears()
  }, [posts, setAvailableYears, setCurrentTags])

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
      setSearchText(searchInput.current.value.toLowerCase())
      filterPosts(searchInput.current.value.toLowerCase())
      setCurrentPage(0)
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
        post.node.frontmatter.title?.toLowerCase().includes(tag) ||
        post.node.frontmatter.tags?.includes(tag) ||
        post.node.frontmatter.summary?.toLowerCase().includes(tag)
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
          <div className={styles.headingContainer}>
            <h1 className={styles.mainHeading}>Journal</h1>
            <ShareButton link="https://yagmurcetintas.com/journal" />
          </div>
          <div className={styles.disclaimerText}>
            If you have copyright claims, mail me and I'll take it down. If you
            think I'm wrong about something, mail me, as I'd love to learn and
            discuss. Thanks for hanging around. You're cool.
          </div>
          <ul className={styles.articleList}>
            {searchResults()
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
                      <BookmarkIcon className={styles.bookmarkIcon} />
                      <div className={styles.tagWrapper}>
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
                    </div>
                  </li>
                )
              })}
          </ul>
          {pageCount > 1 ? (
            <div className={styles.paginationButtonContainer}>
              <div
                className={styles.leftarrow}
                aria-hidden="true"
                onClick={() =>
                  setCurrentPage(
                    currentPage === 0 ? currentPage : currentPage - 1
                  )
                }
              >
                <ChevronDoubleLeftIcon className={styles.chevronIcon} />
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
                  aria-hidden="true"
                >
                  <span className={styles.paginationAlignment}>{i + 1}</span>
                </button>
              ))}
              <div
                className={styles.rightarrow}
                aria-hidden="true"
                onClick={() =>
                  setCurrentPage(
                    currentPage === pageCount - 1
                      ? pageCount - 1
                      : currentPage + 1
                  )
                }
              >
                <ChevronDoubleRightIcon className={styles.chevronIcon} />
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.sidebar}>
          <div className={styles.searchWrapper}>
            <SearchIcon className={styles.searchIcon} />
            <input
              className={styles.search}
              ref={searchInput}
              type="text"
              onKeyUp={handleUserInput}
              placeholder="Search"
            />
            <XCircleIcon
              className={getVisibilityClass()}
              ref={clearIcon}
              onClick={handleClearClick}
              onKeyDown={() => {}}
              aria-hidden="true"
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
                            : `${tagStyles["springgreen"]} ${styles.tag}`
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
              <ChevronRightIcon className={styles.chevronIcon} />
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
