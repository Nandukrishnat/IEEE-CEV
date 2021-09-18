import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../layouts/Layout'

export default function Activities({ data }) {
  let SB = [], CS = [], PES = [], WIE = [], Collab = [];
  data.allMarkdownRemark.nodes.forEach((element, index) => {
    if (new Date(element.frontmatter.date).toISOString() < new Date().toISOString()) {

      if (element.frontmatter.by.toLowerCase() === 'sb') {
        SB.push(data.allMarkdownRemark.nodes[index])
      }
      else if (element.frontmatter.by.toLowerCase() === 'cs') {
        CS.push(data.allMarkdownRemark.nodes[index])
      }
      else if (element.frontmatter.by.toLowerCase() === 'pes') {
        PES.push(data.allMarkdownRemark.nodes[index])
      }
      else if (element.frontmatter.by.toLowerCase() === 'wie') {
        WIE.push(data.allMarkdownRemark.nodes[index])
      }
      else {
        Collab.push(data.allMarkdownRemark.nodes[index])
      }
    }
  });
  return (
    <Layout>
      <div className="banner">Latest Activities</div>
      <div className="container">
        <nav className="my-4">
          <div className="nav nav-tabs justify-content-md-start justify-content-center" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-sb-tab" data-bs-toggle="tab" data-bs-target="#nav-sb" type="button" role="tab" aria-controls="nav-sb" aria-selected="true">SB</button>
            <button className="nav-link" id="nav-cs-tab" data-bs-toggle="tab" data-bs-target="#nav-cs" type="button" role="tab" aria-controls="nav-cs" aria-selected="false">CS</button>
            <button className="nav-link" id="nav-pes-tab" data-bs-toggle="tab" data-bs-target="#nav-pes" type="button" role="tab" aria-controls="nav-pes" aria-selected="false">PES</button>
            <button className="nav-link" id="nav-wie-tab" data-bs-toggle="tab" data-bs-target="#nav-wie" type="button" role="tab" aria-controls="nav-wie" aria-selected="false">WIE</button>
          </div>
        </nav>
        <div className="tab-content my-5" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-sb" role="tabpanel" aria-labelledby="nav-sb-tab">
            <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
              {
                SB.map((el, index) => (
                  <Link className="col d-flex flex-column align-items-center my-2" to={`/activities/${el.frontmatter.slug}`} key={index} style={{ maxWidth: "18rem" }}>
                    <GatsbyImage image={getImage(el.frontmatter.image)} className="poster rounded-xl" alt="" />
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-cs" role="tabpanel" aria-labelledby="nav-cs-tab">
            <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
              {
                CS.map((el, index) => (
                  <Link className="col d-flex flex-column align-items-center my-2" to={`/activities/${el.frontmatter.slug}`} key={index} style={{ maxWidth: "18rem" }}>
                    <GatsbyImage image={getImage(el.frontmatter.image)} className="poster rounded-xl" alt="" />
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-pes" role="tabpanel" aria-labelledby="nav-pes-tab">
            <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
              {
                PES.map((el, index) => (
                  <Link className="col d-flex flex-column align-items-center my-2" to={`/activities/${el.frontmatter.slug}`} key={index} style={{ maxWidth: "18rem" }}>
                    <GatsbyImage image={getImage(el.frontmatter.image)} className="poster rounded-xl" alt="" />
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-wie" role="tabpanel" aria-labelledby="nav-wie-tab">
            <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3">
              {
                WIE.map((el, index) => (
                  <Link className="col d-flex flex-column align-items-center my-2" to={`/activities/${el.frontmatter.slug}`} key={index} style={{ maxWidth: "18rem" }}>
                    <GatsbyImage image={getImage(el.frontmatter.image)} className="poster rounded-xl" alt="" />
                  </Link>
                ))
              }
            </div>
          </div>
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
        by
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