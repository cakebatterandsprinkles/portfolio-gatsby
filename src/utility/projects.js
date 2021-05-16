import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const maxImageWidth = 800

const projects = [
  {
    name: "whereiscovid",
    summary:
      "A COVID19 tracking app. This app provides recent information about Coronavirus while visualizing data on Google Maps.",
    demoLink: "https://whereiscovid.info/",
    repoLink: "https://github.com/cakebatterandsprinkles/whereiscovid",
    repoName: "whereiscovid",
    image: (
      <StaticImage
        alt=""
        style={{
          gridArea: "1/1",
        }}
        width={maxImageWidth}
        src="../images/portfolio/maskedmonalisa.jpg"
      />
    ),
    technologies: [
      "React.js",
      "react-router-dom",
      "novelcovid API",
      "pubmed API",
      "GeoIP",
      "Google Maps API",
    ],
  },
  {
    name: "mendokusai",
    summary: "A todo list app for people who have problem planning their days.",
    demoLink: "https://mendokusai.app/",
    repoLink: "https://github.com/cakebatterandsprinkles/mendokusai-react",
    repoName: "mendokusai-react",
    image: (
      <StaticImage
        alt=""
        style={{
          gridArea: "1/1",
        }}
        width={maxImageWidth}
        src="../images/portfolio/mendokusai.png"
      />
    ),
    technologies: [
      "React.js",
      "react-router-dom",
      "react-redux",
      "OpenWeatherMapAPI",
      "GeoIP",
      "Express.js",
      "MongoDB-Atlas",
      "Sendgrid",
      "Heroku",
    ],
  },
  {
    name: "mockingbird",
    summary: "A 7 minute journal app for well-being.",
    demoLink: "https://mockingbird.yagmurcetintas.com/",
    repoLink: "https://github.com/cakebatterandsprinkles/mockingbird",
    repoName: "mockingbird",
    image: (
      <StaticImage
        alt=""
        style={{
          gridArea: "1/1",
        }}
        width={maxImageWidth}
        src="../images/portfolio/mockingbird-landing.jpg"
      />
    ),
    technologies: [
      "React.js",
      "react-router-dom",
      "Express.js",
      "MongoDB-Atlas",
      "Sendgrid",
      "Heroku",
    ],
  },
  {
    name: "breakout",
    summary: "Atari Breakout game remade with HTML5 Canvas API.",
    demoLink: "https://cakebatterandsprinkles.github.io/breakout/",
    repoLink: "https://github.com/cakebatterandsprinkles/breakout",
    repoName: "breakout",
    image: (
      <StaticImage
        alt=""
        style={{
          gridArea: "1/1",
        }}
        width={maxImageWidth}
        src="../images/portfolio/breakout.png"
      />
    ),
    technologies: ["HTML5 Canvas API"],
  },
  {
    name: "SmartMonke",
    summary:
      "A simple calculator for people who aren't sure if they want to buy or lease a car or rent or buy a house.",
    demoLink: "https://cakebatterandsprinkles.github.io/smart-monke",
    repoLink: "https://smart.innermonke.com",
    repoName: "smart-monke",
    image: (
      <StaticImage
        alt=""
        style={{
          gridArea: "1/1",
        }}
        width={maxImageWidth}
        src="../images/portfolio/luke-stackpoole-x2qSNIEZuEE-unsplash.jpg"
      />
    ),
    technologies: ["CRA", "TypeScript"],
  },
]

export default projects
