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
        <SEO title="3dicons | about" />
        <Annouce />
        <section className="navbar">
          <div className="container">
            <nav>
              <div className="logo">
                <a href="/"><img src="/3dicons.png"/></a>
              </div>
              <div className="menu">
                <ul>
                  <li>
                  <a className="btn btn-outline" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page%2C%20mockup%2C%20social%20media%20post%20or%20presentation%20with%20%233dicons%20-%20an%20open-source%203d%20icons%20library.%20https%3A//3dicons.co%20by%20@realvjy">Show Love<img src="/twitter.svg"/></a>
                  </li>
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
                <h2>About 3dicons</h2>
                <p>3Dicons is a set of beautifully crafted open-source 3D icons that have been created in Blender and made available to the community. It has been released under a <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">Creative Commons CC0</a> license, and hence it is free to use for personal and commercial projects, as well as copying, editing, remixing, sharing, and redrawing. This resource will make it easier for designers and content creators to produce beautiful and effective designs in less time. Although all icons are designed and rendered with a few color options to meet most of your production-ready needs, you can use these images as placeholders until you are ready to outsource a 3D illustrator.</p>
              </div>

              <div className="about-title">
                <img src="/bubble.png" className="about-icon"/>
                <h2>Why Open</h2>
                <p>I support open design initiatives. Designers often redesign existing designs, websites, and apps in order to post them on sites like Dribbble, Behance, or any social platform. We do this primarily to learn, improve, or showcase our skills. If someone works on a concept, why not share the source with the community so they can also learn how it was done. By sharing our source files, skills, and best practices, we uplift the community and enhance design. It was not common a few years ago, if we ever found a PSD file, it was like finding an invaluable treasure. These days, there are many people who start sharing their learning. Although, there is not much good content to look at. <a href="https://twitter.com/pablostanley">Pablo Stanley</a> is one of the most talented artists I have ever known, and he is regularly providing the community with top-quality open design resources. I really admire his contribution to the community and his work.</p>
                <p>In 2019, I shared my source files which had <a href="https://illlustrations.co/?ref=3dicons">100+ illustrations</a>. I had these illustrations on my drive for years, but they were only taking up a lot of storage space. I realized the importance of open source when I made them available to the community. Additionally, I believe we do not need to monetize every side project, it's okay to be creative instead.</p>
                <p>Similarly, in February 2021, I began studying 3D. I started creating 3D icons for the sole purpose of learning how to model. I believe that learning by doing is the best way to learn. A great challenge for me was to pick one icon in 3D and learn how to construct it. In the process of my learning, I noticed that these icons had grown to almost 30. So, decided why not create a pack of 60+ icons and share. In the end, I created 120.</p>
              </div>

              <div className="about-title">
                <img src="/tool.png" className="about-icon"/>
                <h2>How it was made</h2>
                <p>I created all these icons in Blender. Some of them were first doodled on iPad using Procreate, and then modeled in 3D. After modeling, all icons were rendered in different angles and styles for multipurpose use. Below is a link to download rough master blender files as well.</p>
                <a href="https://realvjy.notion.site/3dicons-FAQ-be562c619cf04f2daa04a10c2684575d">Check FAQ to basic tutorial and query »</a>
                <a href="https://bit.ly/3dicons-master-file">Blender Master File »</a>
                <a href="https://bit.ly/3dicons-mockups">3dicons Mockups Figma File »</a>
                <a href="https://bit.ly/3dicons-material">Key Shader/Procedural Texture File »</a>

              </div>

              <div className="about-title">
                <img src="/setting.png" className="about-icon"/>
                <h2>Running Cost: ~$70/mo</h2>
                <ul>
                  <li><span className="cost-lf">Domain & DNS</span><span className="cost-rh">: $36/year (Bigrock)</span></li>
                  <li><span className="cost-lf">Web Hosting</span><span className="cost-rh">: FREE (Github Page)</span></li>
                  <li><span className="cost-lf">Image Hosting</span><span className="cost-rh">: $5/mo (Digital Ocean)</span></li>
                  <li><span className="cost-lf">Download Bandwidth </span><span className="cost-rh">: $40-$60/mo (Digital Ocean, around 10TB/mo)</span></li>
                  <li><span className="cost-lf">Planing & Managing</span><span className="cost-rh">: FREE (Notion)</span></li>
                  <li><span className="cost-lf">Code & Backup</span><span className="cost-rh">: FREE (Github)</span></li>
                </ul>
              </div>

              <div className="about-title">
                <img src="/hand.png" className="about-icon"/>
                <h2>Final Thought</h2>
                <p>There are many 3D illustrations/icons available online for free or at a minimal price. <strong>Releasing 3dicons for free in no way means I am diminishing the worth of other artists' work.</strong> Several designers in the community are just starting out and need low-cost resources to learn from; so that they can create beautiful design sooner. Furthermore, most of the free resources out there don’t give much control over editing or customising, and these freebies are nothing more than a link to purchase the final product. With 3dicons, you will not only be able to practice creating icons in 3D but also directly use them in your personal or commercial projects with absolute ease.</p>
                <p>You can always reach out to me at <a href="https://twitter.com/realvjy">@realvjy</a> or drop email for your tought.</p>
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
