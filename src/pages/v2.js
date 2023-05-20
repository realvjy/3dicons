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

class V2 extends React.Component {

    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const iframe = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeS7ypAFUed3sIKowu_raKtf8LvrRrB5ZwzSxTZwCMeZgvv6A/viewform?embedded=true" width="100%" height="1540" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';

        return (
            <Layout location={this.props.location} title={siteTitle}>
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
                <section>
                    <div className="container">
                        <Iframe iframe={iframe} />
                    </div>
                </section>
                <Footer />
            </Layout>
        )
    }
}

export default V2
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
