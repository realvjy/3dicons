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
        <SEO title="3dicons - 404" />
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
