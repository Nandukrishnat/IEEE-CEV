import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  let upComing = []
  let recent = []
  let today = new Date().toISOString()

  data.allMarkdownRemark.nodes.forEach(el => {
    if (new Date(el.frontmatter.date).toISOString() > today) {
      upComing.push(el)
    } else {
      recent.push(el)
    }
  })
  return (
    <Layout>
      <div className="landing">
        <StaticImage
          className="img"
          src="../images/Hero.jpg"
          alt="Horizon"
        />
      </div>
      <div className="container my-5">
        <div className="heading">Mission and Vision
          <div className="underline"></div>
        </div>
        <div className="d-flex flex-md-row flex-wrap flex-column align-items-md-stretch align-items-center justify-content-center my-3">
          <div className={`card mx-3 my-2 shadow card`}>
            <div className="card-body">
              <div className="cardTitle">What is IEEE ?</div>
              <div className="card-text">
                IEEE is the world’s largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
                Below, you can find IEEE's mission and vision statements.
              </div>
            </div>
          </div>
          <div className={`card mx-3 my-2 shadow card`}>
            <div className="card-body">
              <div className="cardTitle">Mission</div>
              <div className="card-text">
                IEEE's core purpose is to foster technological innovation and
                excellence for the benefit of humanity.
              </div>
            </div>
          </div>
          <div className={`card mx-3 my-2 shadow flex-1 card`}>
            <div className="card-body">
              <div className="cardTitle">Vision</div>
              <div className="card-text">
                IEEE will be essential to the global technical community and to
                technical professionals everywhere, and be universally
                recognized for the contributions of technology and of technical
                professionals in improving global conditions.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="heading">Our IEEE Family
          <div className="underline"></div></div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around align-items-center">
            <StaticImage  className="society-img img-fluid p-4 col" src="../images/CS_logo.webp" alt=""/>
            <StaticImage  className="society-img img-fluid p-4 col" src="../images/PES_logo.webp" alt=""/>
            <StaticImage  className="society-img img-fluid p-4 col" src="../images/WIE_logo.webp" alt=""/>
          </div>
      </div>

      <div className="container my-5">
        <div className="heading">Our Strength
          <div className="underline"></div></div>
        <div className="d-flex bg-dark justify-content-around my-4 rounded-xl">
          <div className={`text-center text-white p-4`}>
            <div className="fs-2 fw-bold">80+</div>
            <div className="fw-bold fs-5">Members</div>

          </div>
          <div className={`text-center text-white p-4`}>
            <div className="fs-2 fw-bold">10</div>
            <div className="fw-bold fs-5">Years</div>

          </div>
          <div className={`text-center text-white p-4`}>
            <div className="fs-2 fw-bold">3</div>
            <div className="fw-bold fs-5">Chapters</div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="heading">Upcoming Events
          <div className="underline"></div></div>
        <div className="d-flex flex-md-row flex-column align-items-center justify-content-around my-4">
          {upComing.map(el => (
            <Link
              key={el.frontmatter.title}
              className="card my-2 shadow"
              to={`activities/${el.frontmatter.slug}`}
              style={{ maxWidth: "18rem" }}
            >
              <div>
                <GatsbyImage
                  image={getImage(el.frontmatter.image)}
                  alt={el.frontmatter.title}
                  className="card-img"
                />
              </div>
              <div className="card-body">
                <div className="text-center fw-bold">{el.frontmatter.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Upcomming */}

      <div className="container my-5 rounded-xl bg-white p-4 shadow">

        <div className="heading">About Us
          <div className="underline"></div>
        </div>

        <div
          className="row mx-auto my-4 align-items-center"
          style={{ maxWidth: "1200px" }}
        >
          <div className="col-lg-6 my-2">
            <StaticImage
              className="rounded-xl"
              src="../images/Hero.jpg"
              alt="Horizon"
            />
          </div>
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facere adipisci vel sit, aut tenetur voluptatibus eos culpa
              eligendi. Excepturi, numquam? Repudiandae, veniam saepe doloremque
              maiores unde adipisci facere explicabo?
            </p>
            <Link className="btn btn-primary" to="/about-us">
              View more
            </Link>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="container my-5">
        <div className="heading">Recent Events
          <div className="underline"></div></div>
        <div className="d-flex flex-md-row flex-column align-items-center justify-content-around">
          {recent.slice(0, 3).map(el => (
            <Link
              key={el.frontmatter.title}
              className="card my-2 shadow"
              to={`activities/${el.frontmatter.slug}`}
              style={{ maxWidth: "18rem" }}
            >
              <div>
                <GatsbyImage
                  image={getImage(el.frontmatter.image)}
                  alt={el.frontmatter.title}
                  className="card-img"
                />
              </div>
              <div className="card-body">
                <div className="fw-bold text-center">{el.frontmatter.title}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="d-flex justify-content-center my-4">
          <Link className="btn btn-primary" to="/activities">
            View More
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query Events {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { date: {} } }
      limit: 20
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
