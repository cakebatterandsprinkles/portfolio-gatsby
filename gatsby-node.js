module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log(JSON.stringify(node, undefined, 4))
  }
}
