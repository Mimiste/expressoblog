import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ title, description }) => {
  const imgQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(imgQuery)

  return (
    <header className="page-header bg-primary text-white">
      <Img fluid={imgQuery.fileName.childImageSharp.fluid} />
      <div className="container text-center title">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </header>
  )
}

export default Header
