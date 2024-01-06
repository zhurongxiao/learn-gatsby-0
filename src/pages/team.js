import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"



const TeamPage = () => (
    <Layout>
        <h1>Our team... </h1>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Team" />

export default TeamPage
