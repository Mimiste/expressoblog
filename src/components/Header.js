import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container } from 'react-bootstrap'

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

  return (
    <header className="page-header bg-primary text-white">
      <Img fluid={imgQuery.fileName.childImageSharp.fluid} />
      <Container fluid className="text-center title">
        <h1>{title}</h1>
        <h2 className="lead">{description}</h2>
      </Container>
    </header>
  )
}

export default Header
