import React from "react"

const Footer = ({ mail, author }) => {
  return (
    <footer className="page-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <a href={"mailto:" + mail}>{mail}</a>
          </div>
          <div className="col-6 text-right">Copyright © {author}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
