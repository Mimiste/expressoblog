import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import { ListGroup } from 'react-bootstrap'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            frontmatter {
              title
              path
              date
            }
          }
        }
      }
    `
  )

  const postsList = allMarkdownRemark.nodes.map((node, i) => (
    <ListGroup.Item key={i}>
      <h3>{node.frontmatter.title}</h3>
      <div className="text-muted">{node.frontmatter.date}</div>
    </ListGroup.Item>
  ))

  return (
    <Layout>
      <ListGroup variant="flush">{postsList}</ListGroup>
    </Layout>
  )
}

export default IndexPage
