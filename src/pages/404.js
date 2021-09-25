import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illlustrations - MIT License" />
        <section className="navbar">
          <div className="container">
            <nav>
              <div className="logo">
                <a href="/"><img src="/3dicons.png"/></a>
              </div>
              <div className="menu">
                <ul>
                  <li><a href="#" className="btn btn-outline">show love <img src="/twitter.svg"/> </a></li>
                  <li><a href="/about" className="btn btn-text">about</a></li>
                  <li><a href="https://www.buymeacoffee.com/realvjy" className="btn btn-text">donate</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="list">

          </div>

        </section>
        <section className="about">
          <div className="container">
            <div className="about-wrap">
              404 Page
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
