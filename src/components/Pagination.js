import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid"
import React from "react"
import styles from "./Pagination.module.scss"

const Pagination = (pageCount, currentPage, setCurrentPage) => {
  return (
    <div className={styles.paginationButtonContainer}>
      <div
        className={styles.leftarrow}
        aria-hidden="true"
        onClick={() =>
          setCurrentPage(currentPage === 0 ? currentPage : currentPage - 1)
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
            currentPage === pageCount - 1 ? pageCount - 1 : currentPage + 1
          )
        }
      >
        <ChevronDoubleRightIcon className={styles.chevronIcon} />
      </div>
    </div>
  )
}

export default Pagination
