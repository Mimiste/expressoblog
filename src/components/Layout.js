import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            mail
          }
        }
      }
    `
  )

  return (
    <>
      <Header
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
      />
      {children}
      <Footer author={site.siteMetadata.author} mail={site.siteMetadata.mail} />
    </>
  )
}

export default Layout
