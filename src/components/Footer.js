import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = ({ mail, author }) => {
  return (
    <footer className="page-footer">
      <Container fluid>
        <Row>
          <Col>
            <a href={'mailto:' + mail}>{mail}</a>
          </Col>
          <Col className="text-right">Copyright © {author}</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
