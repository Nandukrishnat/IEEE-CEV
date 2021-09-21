import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';

export const ActivitiesCollection = ({data}) => {
  return (
    <div className="row justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-3">
      {
        data.length > 0 ? data.map((el, index) => (
          <Link className="col card" to={`/activities/${el.frontmatter.slug}`} key={index}>
            <GatsbyImage image={getImage(el.frontmatter.image)} className="card-img rounded-xl" alt="" />
            <div className="m-auto text-dark fw-bold">
              <div>{el.frontmatter.title}</div>
            </div>
          </Link>
        )) :
          <div className="center fw-bold fs-3">No Data Available</div>
      }
    </div>
  )
}
