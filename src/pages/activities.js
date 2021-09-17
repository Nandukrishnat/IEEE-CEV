import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../layouts/Layout'

export default function Activities({ data }) {
  let allEvents = [];
  data.allMarkdownRemark.nodes.forEach((element, index) => {
    if (new Date(element.frontmatter.date).toISOString() < new Date().toISOString()) {
      allEvents.push(data.allMarkdownRemark.nodes[index]);
    }
  });
  return (
    <Layout>
      <div className="container">
        <div className="h3 d-flex justify-content-center heading">Our Activities
          <div className="underline"></div></div>
        <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
          {
            allEvents.map((el, index) => (
              <Link className="col d-flex flex-column align-items-center my-2" to={`/activities/${el.frontmatter.slug}`} key={index} style={{ maxWidth: "18rem" }}>
                <GatsbyImage image={getImage(el.frontmatter.image)} className="poster rounded-xl" alt="" />
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query allActivities {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        date
        title
        slug
        image {
          childImageSharp {
            gatsbyImageData
          }
          id
        }
      }
    }
  }
}
`