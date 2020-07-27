import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <header>
      <div>
        <img />
      </div>
      <nav>
        <h1>
          <Link to="/">Yagmur C. Tas</Link>
        </h1>
        <p>
          Full stack web developer living in Orlando, Florida. Has an immense
          curiosity for many things in life. Reads a lot and sometimes writes a
          lot. Also makes things out of clay that she's sometimes proud of.
        </p>
        <ul>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
