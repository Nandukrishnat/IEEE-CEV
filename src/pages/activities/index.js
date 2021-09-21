import { graphql } from 'gatsby'
import React from 'react';
import { ActivitiesCollection } from '../../components/ActivitiesCollection';
import Layout from '../../layouts/MainLayout'

export default function Activities({ data }) {
  let CS = [], PES = [], WIE = [], Collab = [], All = [];
  data.allMarkdownRemark.nodes.forEach((element, index) => {
    if (new Date(element.frontmatter.date).toISOString() < new Date().toISOString()) {

      if (element.frontmatter.by.toLowerCase() === 'cs') {
        CS.push(data.allMarkdownRemark.nodes[index])
      }
      else if (element.frontmatter.by.toLowerCase() === 'pes') {
        PES.push(data.allMarkdownRemark.nodes[index])
      }
      else if (element.frontmatter.by.toLowerCase() === 'wie') {
        WIE.push(data.allMarkdownRemark.nodes[index])
      }
      else if (element.frontmatter.by.toLowerCase() === 'collab') {
        Collab.push(data.allMarkdownRemark.nodes[index])
      }
      All.push(data.allMarkdownRemark.nodes[index])
    }
  });


  return (
    <Layout>
      <div className="banner">Latest Activities</div>
      <div className="container">
        <nav className="my-4">
          <div className="nav nav-pills justify-content-md-start justify-content-center" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
            <button className="nav-link" id="nav-cs-tab" data-bs-toggle="tab" data-bs-target="#nav-cs" type="button" role="tab" aria-controls="nav-cs" aria-selected="false">CS</button>
            <button className="nav-link" id="nav-pes-tab" data-bs-toggle="tab" data-bs-target="#nav-pes" type="button" role="tab" aria-controls="nav-pes" aria-selected="false">PES</button>
            <button className="nav-link" id="nav-wie-tab" data-bs-toggle="tab" data-bs-target="#nav-wie" type="button" role="tab" aria-controls="nav-wie" aria-selected="false">Wie</button>
            <button className="nav-link" id="nav-collab-tab" data-bs-toggle="tab" data-bs-target="#nav-collab" type="button" role="tab" aria-controls="nav-collab" aria-selected="false"><span  className="d-none d-md-block">Collabrated </span><span className="d-md-none">Collab</span></button>
          </div>
        </nav>
        <div className="tab-content my-5" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
            <ActivitiesCollection data={All} />
          </div>
          <div className="tab-pane fade" id="nav-cs" role="tabpanel" aria-labelledby="nav-cs-tab">
            <ActivitiesCollection data={CS} />
          </div>
          <div className="tab-pane fade" id="nav-pes" role="tabpanel" aria-labelledby="nav-pes-tab">
            <ActivitiesCollection data={PES} />
          </div>
          <div className="tab-pane fade" id="nav-wie" role="tabpanel" aria-labelledby="nav-wie-tab">
            <ActivitiesCollection data={WIE} />
          </div>
          <div className="tab-pane fade" id="nav-collab" role="tabpanel" aria-labelledby="nav-collab-tab">
            <ActivitiesCollection data={Collab} />
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