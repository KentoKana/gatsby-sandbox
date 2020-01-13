import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  useStaticQuery(
    graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            title
          }
        }
        allAuthorJson {
          edges {
            node {
              firstName
              bannerImage
            }
          }
        }
      }
    `
  )
  console.log(data.allAuthorJson.edges[0].node.bannerImage)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        Welcome To A Page For {data.allAuthorJson.edges[0].node.firstName}
      </h1>
      <p> {data.site.siteMetadata.title}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image alt={"hello"} filename={data.allAuthorJson.edges[0].node.bannerImage}/>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
