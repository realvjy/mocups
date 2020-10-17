import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="MOCUP - iPhone 12 Mockups" />
        <section className="header_section">
          <div className="container">
            <nav>
              <Link to={`/`} className="brand">
                <img src="/mocup-logo.png" className="logo" alt="mocup" />
              </Link>
              <div className="menu">
                <ul className="menu-links">
                  <li>
                    <a href="#" title="iPhone" className="active">iPhone</a>
                  </li>
                  <li>
                    <a href="#" title="mac">Mac</a>
                  </li>
                  <li>
                    <a href="#" title="bmc">buy me a copy</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section className="hero_section">
          <div className="container">
            <div className="hero">
              <h1><img src="iphone-12.png"/></h1>
              <h3>ALL IN ONE MOCKUPS</h3>
              <p>More than 30+ variants fully editable and dribbble ready artboard. Including mini, pro, pro max</p>
              <a href="#" className="download">COMING SOON</a>
              <div className="tool"><img src="/tools.png"/></div>
            </div>
          </div>
        </section>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
