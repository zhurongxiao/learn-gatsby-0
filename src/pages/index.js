import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticQuery, graphql, staticQuery } from "gatsby"
import Post from '../components/Post'



const IndexPage = () => (
  <Layout>
    <h1>Home page</h1>
    <StaticQuery query={indexQuery} render={data => {
      return (
       <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Post title={node.frontmatter.title}
            author={node.frontmatter.author}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
            body={node.excerpt}
          />
        ))}
       </div>
        
      )
    }}/>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

const indexQuery = graphql`
query{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    
  ){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          path
        }
        excerpt
      }
    }
  }
}
`

export const Head = () => <Seo title="Home" />

export default IndexPage
