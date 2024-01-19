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
      <Layout location={this.props.location} title={siteTitle} bgclass="3dicons-main">
        <SEO title="3dicons - Open source 3D icon library" />
        <Annouce />
        <section className="navbar">
          <div className="container">
            <nav>
              <div className="logo">
                <a href="/"><img src="/3dicons.png" /></a>
              </div>
              <div className="menu">
                <ul>

                  <li><a href="/about" className="btn btn-text">about</a></li>
                  <li><a href="/figma" className="btn btn-text">figma</a></li>
                  <li><a href="https://www.buymeacoffee.com/realvjy" className="btn btn-text">donate</a></li>
                  <li>
                    <a className="btn btn-outline" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page%2C%20mockup%2C%20social%20media%20post%20or%20presentation%20with%20%233dicons%20-%20an%20open-source%203d%20icons%20library.%20https%3A//3dicons.co%20by%20@realvjy">Show Love<img src="/twitter.svg" /></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

        </section>

        <Header />

        <div className="handsss">
          <div className="container">
            <a href="https://realvjy.lemonsqueezy.com/checkout/buy/a11f5cef-a474-49f2-a452-0a7b6d03e342?discount=0">
              <img src="/handkit.png" />
            </a>
          </div>

        </div>
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
