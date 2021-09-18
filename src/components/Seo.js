import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export const Seo = () => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <div>
        <Helmet htmlAttributes={{lang:'en'}}>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={data.site.siteMetadata.description} />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
      </div>
  )
}