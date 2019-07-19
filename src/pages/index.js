import React from "react"

import Layout from "../components/layout"
import ChrisDave from "../components/images/crisDave"
import MeasuringTape from "../components/images/measuringTape"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex-row">
      <div className="flex-column">
        <h1>Building & Remodeling Homes around Oshkosh since 1976</h1>
      </div>
      <div className="flex-column">
        <ChrisDave />
      </div>
    </div>
    <div
      style={{
        marginTop: "-20%",
      }}
    >
      <MeasuringTape />
    </div>
    {/* <div
      className="flex-row"
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h2 className="flex-column">See how we measure up</h2>
      <button className="primary-button flex-column">See Projects</button>
    </div> */}
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h2
        style={{
          margin: "0 auto",
          maxWidth: 460,
          textAlign: "center",
        }}
      >
        Home building and remodeling services we offer in Fox Valley Wisconsin
      </h2>
      <div className="flex-row">
        <div className="flex-column">
          <h3 className="text-center">Living Room Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Kitchen Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Basement Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Bathroom Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Bedroom Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Porch Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Laundry Room Remodeling</h3>
        </div>
        <div className="flex-column">
          <h3 className="text-center">Dinning Room Remodeling</h3>
        </div>
      </div>
      <div
        className="flex-row"
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
        }}
      >
        <a className="primary-button flex-column" href="tel:+1-920-232-7620">
          Call us
        </a>
        {/* <button className="primary-button flex-column">Email us</button> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
