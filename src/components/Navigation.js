import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <header>
      <div>
        <img />
      </div>
      <div>
        <h1>
          <Link to="/">Yagmur C. Tas</Link>
        </h1>
        <p>
          Full stack web developer living in Orlando, Florida. Has an immense
          curiosity for many things in life. Reads a lot and sometimes writes a
          lot. Also makes things out of clay that she's sometimes proud of.
        </p>
        <p>
          <Link to="/blog">Blog</Link>
        </p>
        <p>
          <Link to="/gallery">Gallery</Link>
        </p>
      </div>
    </header>
  )
}

export default Navigation
