import React from 'react'
import Layout from './Layout'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const Post = (pageData) => {
  useStaticQuery(graphql`
    query blogPost($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date
          path
          title
        }
      }
    }
  `)
  const post = pageData.data.markdownRemark
  return (
    <>
      <Layout>
        <Container fluid>
          <Row className="mt-3">
            <Col>
              <h3>{post.frontmatter.title}</h3>
            </Col>
            <Col className="text-muted text-right">{post.frontmatter.date}</Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col dangerouslySetInnerHTML={{ __html: post.html }} />
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Post
