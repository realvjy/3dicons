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

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illlustrations - MIT License" />
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
                  <li><a href="/about" className="btn btn-text">about</a></li>
                  <li><a href="https://www.buymeacoffee.com/realvjy" className="btn btn-text">donate</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="about-wrap">
              <div className="about-title">
                <img src="/3d.png" className="about-icon"/>
                <h2>About 3DICONS</h2>
                <p>3Dicons is a set of beautifully crafted open-source icons that have been created in Blender and made available to the community as part of an open design initiative. It has been released under a Creative Commons CC0 license, and hence it is free to use for personal and commercial projects, as well as copying, editing, remixing, sharing, and redrawing. With this resource, designers should be able to produce beautiful and effective design in less time. Although all icons are designed with a few color options to meet most of your production-ready needs, you can use these images as placeholders until you are ready to outsource a 3D illustrator. </p>
              </div>

              <div className="about-title">
                <img src="/bubble.png" className="about-icon"/>
                <h2>Why Open</h2>
                <p>I believe in open design and encourage others to embrace it. We designers sometimes do things like redesign websites and apps (like restructuring Facebook and Netflix) at sites like dribbble, behance, and codepen. Therefore, it becomes a question when designers create designs solely for the purpose of showcasing their skills, and the source files of these designs are nothing but occupying more and more of your storage on your computer. I think that if someone works on something as a concept, why not share it with the community to get feedback, as well as sharing the source will help them to understand how things are crafted. By sharing our source files, skills, and best practices, we improve the community and enhance design. After understanding this I started working on this direction and found @pablo Stanley always trying give as many as possible to give back to community. And decide do the same. I first shared source files for 100+ illustrations. These illustrations were stored on my drive for years.</p>
                <p>Similarly, in February 2021, I began studying 3D illustrations. The majority of these models were made only for the purpose of learning how to model. I believe in learning by doing, and I believe that picking a single icon and learning how to construct it in 3d is challenging. After a while, I noticed that these icons had expanded to almost 30 different icons. As a result, I made the decision to create a collection of at least 60 illustrations and share them with the community. Then I don’t stopped my self to create more total is 120+.</p>
              </div>

              <div className="about-title">
                <img src="/tool.png" className="about-icon"/>
                <h2>How it was made</h2>
                <p>I created all these icons in Blender. Some of them were first doodled on iPad using Procreate, and then modeled in 3D. After modeling, all icons were rendered in different angles and styles for multipurpose use. The rough master file and all production ready assets can be downloaded from this link.</p>
                <a href="#">Check this FAQ notion board for further information »</a>
                <a href="#">You can also see how I created 3Dicons on SmashingMagazine »</a>
              </div>

              <div className="about-title">
                <img src="/hand.png" className="about-icon"/>
                <h2>Final Thought</h2>
                <p>There are many 3D illustrations/icons available online for free or at a minimal price. <strong>Releasing 3Dicons for free in no way means I am diminishing the worth of other artists' work.</strong> Several designers in the community are just starting out and need low-cost resources to learn from; so that they can create beautiful design sooner. Furthermore, most of the free resources out there don’t give much control over editing or customising, and these freebies are nothing more than a link to purchase the final product. With 3Dicons, you will not only be able to practice creating icons in 3D but also directly use them in your personal/commercial projects with absolute ease.</p>
                <p>You can always reach out to me at twitter or drop email for your tought.</p>
              </div>


            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
