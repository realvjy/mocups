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
        <SEO title="iPhone 12 Mockups" />
        <section className="header_section">
          <div className="container">
            <nav>
              <Link to={`/`} className="brand">
                <img src="mocups-logo.png" className="logo" alt="mocup" />
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
                    <a href="https://www.buymeacoffee.com/realvjy" title="twitter">share on twitter <img src="twitter.svg"/></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section className="hero_section">
          <div className="container">
            <div className="hero">
              <div className="text-detail">
                <div className="info">
                  <h1><img src="iphone-12.png"/></h1>
                  <h3>ALL IN ONE MOCKUPS</h3>
                  <p>More than 20+ variants fully editable and dribbble ready artboard. Including mini, pro, pro max</p>
                  <div className="btn-lnks">
                    <div className="dwn-links">
                      <button className="btn btn-download">
                        <h4>Download Now</h4>
                      </button>
                      <ul className="dwn-list">
                        <li><a href="http://bit.ly/iPhone12-MOCUPS-Figma"><img src="figma.png"/> Figma</a></li>
                        <li><a href="https://bit.ly/iPhone12-MOCUPS-Sketch"><img src="sketch.png"/> Sketch</a></li>
                        <li><a href="https://bit.ly/iPhone12-MOCUPS-XD"><img src="xd.png"/> Adobe XD</a></li>
                        <li><a href="https://bit.ly/iPhone12-MOCUPS-PSD"><img src="ps.png"/> Photoshop</a></li>
                        <li><a href="http://bit.ly/iPhone12-MOCUPS-Studio"><img src="studio.png"/> Invision Studio</a></li>
                      </ul>
                    </div>
                    <a href="https://www.buymeacoffee.com/realvjy" className="btn btn-coffee">
                      <h4>Buy me a coffee</h4>
                    </a>
                  </div>
                  <div className="tool"><img src="tools.png"/></div>
                </div>
                <div className="credit">
                  <p>Made with love ❤ and coffee by <a href="https://vijayverma.co">vijay verma</a> @realvjy</p>
                </div>
              </div>
              <div className="mocups">
                <div className="images">
                  <img src="all-iphones.png" />
                </div>
              </div>
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
