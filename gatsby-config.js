module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Ovo", "Muli", "Anonymous Pro", "Share Tech Mono"],
        },
      },
    },
  ],
}
