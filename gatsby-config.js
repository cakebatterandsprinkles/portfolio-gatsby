module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto Mono", "Anonymous Pro", "Share Tech Mono"],
        },
      },
    },
  ],
}
