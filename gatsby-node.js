exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query EventCreator {
    allMarkdownRemark{
      nodes {
        frontmatter {
          slug
        }
        id
      }
    }
  }
`)

  data.allMarkdownRemark.nodes.forEach(el => {
    const slug = el.frontmatter.slug;
    actions.createPage({
      path: "/activities/"+slug,
      component: require.resolve(`./src/templates/events.js`),
      context: { slug: slug },
    })
  })
}
