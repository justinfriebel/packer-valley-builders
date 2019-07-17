import React from "react"
import Link from "gatsby-link"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "#0C5900",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#B8B233",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
