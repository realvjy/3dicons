// about
// 25 Aug, 21
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const About = () => {
    return (
      <section className="about">
        <div className="container">
          <div className="about-wrap">
            <div className="about-box">
              <h3>About 3Dicons</h3>
              <p>This project started when I start learning blender.  Some of these icons are created just to learn all about modeling those small things. After sometime I realize let’s release this for community to use it. So, I decided to create a large collection of most used 3D icons and after months of hard work and here you go. Available as opensource and free for both personal and commercial projects under CC0. Enjoy. I’m available to help and support at twitter.com/realvjy</p>
            </div>
            <div className="stats">
              <div className="soon-log">
                <h4>SOON</h4>
                <ul>
                  <li>1. Plugins for Figma, Sketch and XD</li>
                  <li>1. Plugins for Figma, Sketch and XD</li>
                  <li>1. Plugins for Figma, Sketch and XD</li>
                  <li>1. Plugins for Figma, Sketch and XD</li>
                </ul>
              </div>
              <div className="all-icons">
                <div className="num-stat">
                  <h3>110</h3>
                  <span>Icons</span>
                </div>
                <div className="num-stat">
                  <h3>800</h3>
                  <span>Variations</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default About
