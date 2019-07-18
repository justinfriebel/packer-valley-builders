import React from "react"
import Link from "gatsby-link"

import PVBFacebook from "../components/images/pvbFacebook"

const Footer = ({ siteTitle }) => (
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
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          &copy; {siteTitle} {new Date().getFullYear()}
        </Link>
        <a
          href="https://www.facebook.com/packervalleybuilders/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#B8B233",
            textDecoration: "none",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          <div
            style={{
              float: "right",
              maxHeight: "25px",
            }}
          >
            <PVBFacebook />
          </div>
        </a>
      </p>
    </div>
  </div>
)

export default Footer
