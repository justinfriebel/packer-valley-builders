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
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#B8B233",
            textDecoration: "none",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontWeight: "bold",
            textRendering: "optimizeLegibility",
            fontSize: "1.25rem",
            lineHeight: "1.1",
          }}
        >
          {siteTitle}
        </Link>
      </div>
    </div>
  </div>
)

export default Header
