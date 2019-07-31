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
        <h1>
          Building & remodeling homes & businesses in Fox Valley Wisconsin since
          1976
        </h1>
      </div>
      <div className="flex-column">
        <ChrisDave />
      </div>
    </div>
    <div className="measuring-tape">
      <MeasuringTape />
    </div>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <p>
        Packer Valley Builders is a fully licensed and insured General
        Contractor offering serves to both Residential and Commercial clients in
        the Fox Valley area. While every project is different, we know that the
        most important one is yours. We oversee all phases of construction
        projects as your General Contractor.
      </p>
      <p>
        Starting from your ideas to the completion. We can help you increase the
        value of your property by adding just the right touches that are
        customized to your specifications. Packer Valley Builders, Inc. is an
        experienced team that will complete your project on time and with
        quality results. In order to succeed in the construction industry, a
        general contractor must integrate superior craftsmanship, experience,
        and dedication within the company. We believe that teamwork, integrity,
        honesty and attention to detail each step of the way, make the best
        construction environment for everyone; which ultimately leads to
        customer satisfaction.
      </p>
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
