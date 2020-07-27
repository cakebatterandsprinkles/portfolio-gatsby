import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const portfolioPage = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>Website Portfolio</h1>
        <p>Cool stuff will show here</p>
      </div>
      <Footer />
    </div>
  )
}

export default portfolioPage
