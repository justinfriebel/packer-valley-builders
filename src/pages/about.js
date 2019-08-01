import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import ChrisDave2 from "../components/images/crisDave2"

const AboutPage = () => (
  <Layout>
    <Helmet
      title="About Packer Valley Builders in Fox Valley WI"
      meta={[
        {
          name: "description",
          content:
            "Learn more about Packer Valley Builders located in Fox Valley Wisconsin.",
        },
      ]}
    />
    <h1 style={{ marginTop: 24 }}>About Packer Valley Builders</h1>
    <p>
      Packer Valley Builders was started by Phillip Ruedinger in 1968 and is now
      operated and owned his son, David Ruedinger. Packer Valley is dedicated to
      fulfilling our customers' expectations. We approach every project, big or
      small, with dedication and in a cost-effective manner. You can be assured
      knowing that we hire only the best subcontractors in the area.
    </p>
    <p>
      We have built a relationship with these subcontractors for many years and
      they know we will only accept the best. Packer Valley Builers, Inc.
      realizes that the quality products is just as important as quality
      workmanship. That is why we work very hard to make sure you get the
      quality products that meet your budgets.
    </p>
    <p>
      Packer Valley Builders has earned a reputation for honesty and
      craftsmanship. Our customers agree that choosing a reputable, quality
      minded contractor like Packer Valley Builders, Inc. was the right choice
      to make. Let us prove the same to you.
    </p>
    <h2>Cris and David Ruedinger</h2>
    <div
      style={{
        maxWidth: 320,
      }}
    >
      <ChrisDave2 />
    </div>
  </Layout>
)

export default AboutPage
