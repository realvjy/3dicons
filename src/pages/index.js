import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Header from "../components/header"
import Annouce from "../components/announce"
import Footer from "../components/footer"
import AllIcons from "../components/all-icons"
import InAction from "../components/in-action"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="3dicons - Beautifully crafted opend source 3D icons" />
        <Annouce />
        <section className="navbar">
          <div className="container">
            <nav>
              <div className="logo">
                <a href="#"><img src="/3dicons.png"/></a>
              </div>
              <div className="menu">
                <ul>
                  <li><a href="#" className="btn btn-outline">show love</a></li>
                  <li><a href="#" className="btn btn-text">donate</a></li>
                  <li><a href="#" className="btn btn-text">github</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <Header />
        <AllIcons />
        <InAction />
        <About />
        <Footer />
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
