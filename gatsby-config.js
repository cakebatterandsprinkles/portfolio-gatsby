module.exports = {
  siteMetadata: {
    title: "portfolio-gatsby",
    author: "Yagmur C. Tas",
    github: "cakebatterandsprinkles",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto Mono", "Anonymous Pro", "Share Tech Mono"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
