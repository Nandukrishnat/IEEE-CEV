import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function EventPost({ data }) {
  const event = data.markdownRemark
  return (
    <Layout>
      <div className="container my-5 py-2">
        <div className="my-5 d-flex flex-column align-items-center">
          <h1 className="fw-bold">{event.frontmatter.title}</h1>
        <div className="underline"></div>
        <p className="fw-bold my-2 fs-5 text-muted">{new Date(event.frontmatter.date).toDateString()}</p>
        </div>
        <div className="posterContainer"><GatsbyImage image={getImage(event.frontmatter.image)} className="poster rounded-xl" alt={event.frontmatter.title}/></div>
        <div className="my-5 p-4" dangerouslySetInnerHTML={{ __html: event.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      slug
      title
      date
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    html
    id
  }
}
`