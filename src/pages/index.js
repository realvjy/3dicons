import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KnowMore from "../components/know-more"
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
    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: false,
      indicators: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
      }
    }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="3dicons - Beautifully crafted opend source 3D icons" />
        <Annouce />
        <section className="navbar">
          <div className="container">
            <nav>
              <div className="logo">
                <a href="/"><img src="/3dicons.png"/></a>
              </div>
              <div className="menu">
                <ul>
                  <li><a href="#" className="btn btn-outline">show love <img src="/twitter.svg"/> </a></li>
                  <li><a href="https://www.buymeacoffee.com/realvjy" className="btn btn-text">donate</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="list">

          </div>

        </section>
        <Header />
        <AllIcons />

        <InAction />
        <KnowMore />
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
    allFile {
      edges {
        node {
          id
          name
        }
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
