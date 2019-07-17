import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import BrickTile from "../images/brick-tile.png"
import ChrisDave from "../components/images/crisDave"
import MeasuringTape from "../components/images/measuringTape"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="flex-row"
      style={{
        backgroundImage: `url(${BrickTile})`,
      }}
    >
      <div className="flex-column">
        <h1>Building & Remodeling Homes around Oshkosh since 1976</h1>
      </div>
      <div className="flex-column">
        <ChrisDave />
      </div>
      <MeasuringTape
        style={{
          marginTop: "-20%",
        }}
      />
    </div>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h2>See how we measure up</h2>
      <button className="primary-button">See Projects</button>
    </div>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h2>
        Home building and remodeling services we offer in Fox Valley Wisconsin
      </h2>
      <div className="flex-row">
        <div className="flex-column">
          <h3>Living Room Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Kitchen Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Basement Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Bathroom Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Bedroom Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Porch Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Laundry Room Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3>Dinning Room Remodeling</h3>
        </div>
      </div>
      <button className="primary-button">Call us</button>
      <button className="primary-button">Email us</button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
