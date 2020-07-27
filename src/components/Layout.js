import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Layout = props => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <div>{props.children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
