import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const ServicesPage = () => (
  <Layout>
    <Helmet
      title="Packer Valley Builder's Services Fox Valley WI"
      meta={[
        {
          name: "description",
          content:
            "Learn more about Packer Valley Builder's Services in Fox Valley Wisconsin.",
        },
      ]}
    />
    <h1 style={{ marginTop: 24 }}>About Packer Valley Builders</h1>
    <p>
      Below is a list of some of the services provided. Please give us a call
      and see if you can help you!
    </p>
    <h2>Remodeling</h2>
    <h2>Finished Basements</h2>
    <h2>Decks</h2>
    <h2>Ramps</h2>
    <h2>Porches</h2>
    <h2>ScreenPorches</h2>
    <h2>Cabinets</h2>
    <h2>Countertops</h2>
    <h2>Fire</h2>
    <h2>Insurance Remodeling</h2>
    <h2>Emergency Home Repair</h2>
    <h2>Home Additions</h2>
    <h2>Sun Rooms</h2>
    <h2>Crown & Chair Moldings</h2>
    <h2>New Build</h2>
    <h2>Baths</h2>
    <h2>Rough and Finished Carpentry</h2>
    <h2>Kitchens</h2>
    <h2>Garages</h2>
  </Layout>
)

export default ServicesPage
