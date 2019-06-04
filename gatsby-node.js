const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const postTemplate = path.resolve(`src/components/Post.js`)
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      actions.createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
