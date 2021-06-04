const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = node.frontmatter.title
      .replace(/[^\w\d ]/g, "")
      .split(" ")
      .join("-")
      .toLowerCase()
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("./src/templates/Article.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              tags
              summary
              contributor
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: articleTemplate,
      path: `/journal/${edge.node.fields.slug}`,
      context: {
        metadata: edge.node.frontmatter,
        content: edge.node.html,
        slug: edge.node.fields.slug,
      },
    })
  })
}
