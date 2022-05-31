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

class FigmaPlugin extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle} bgclass="figma-plugin">
                <SEO title="3dicons | about" />
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
                                    <li><a href="/figma-plugin" className="btn btn-text">figma</a></li>
                                    <li><a href="https://www.buymeacoffee.com/realvjy" className="btn btn-text">donate</a></li>
                                    <li>
                                        <a className="btn btn-outline" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page%2C%20mockup%2C%20social%20media%20post%20or%20presentation%20with%20%233dicons%20-%20an%20open-source%203d%20icons%20library.%20https%3A//3dicons.co%20by%20@realvjy">Show Love<img src="/twitter.svg" /></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className="figma-section">
                    <div className="fig-img">
                        <img src="/fig-1.png" />
                    </div>
                    <div className="fig-text fig-head">
                        <div className="content-wrapper">
                            <img src="/3d-fig-plugin.png" />
                            <p>Now you can add 3dicons directly to your design from the plugin. And yes, you can search as well.</p>
                            <div className="fig-btn-box">
                                <a href="#" className="btn fig-btn-f">
                                    <img src="/figma.svg" /> <span>Coming soon on Figma</span>
                                </a>
                                <a href="https://www.buymeacoffee.com/realvjy" target={"_blank"} className="btn fig-btn-o">
                                    <img src="/bmc.svg" /> <span>Donate & Support</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="figma-section">
                    <div className="fig-text fig-search">
                        <div className="content-wrapper">
                            <img src="/search.png" className="search-icon" />
                            <h3>Search</h3>
                            <p>You can search icons with any related keyword and it works like a charm. After searching, you can add icons in any color or camera angle. Keep designing and add 3dicons .</p>

                        </div>
                    </div>
                    <div className="fig-video">
                        <video autoPlay muted loop src="/search-3dicons.mp4">
                            <source src="/search-3dicons.mp4"
                                type="video/mp4" />
                        </video>
                    </div>

                </section>
                <section className="figma-section">
                    <div className="fig-text fig-open">
                        <div className="content-wrapper">
                            <img src="/heart-1.png" /><img src="/heart-2.png" /> <img src="/heart-3.png" />
                            <h3>Open Source</h3>
                            <p>Yes, since everything about this project is shared publicly. You can grab the source code for this plugin on github. You are free to contribute or create your own plugin using it.</p>
                            <div className="fig-btn-box">
                                <a href="https://github.com/realvjy/3dicons-figma" target={"_blank"} className="btn fig-btn-f">
                                    <img src="/github.svg" /> <span>Check it on Github</span>
                                </a>
                                <a href="https://www.buymeacoffee.com/realvjy" target={"_blank"} className="btn fig-btn-o">
                                    <img src="/bmc.svg" /> <span>Donate & Support</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
                <Footer />
            </Layout>
        )
    }
}

export default FigmaPlugin

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
