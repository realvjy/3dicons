// about
// 25 Aug, 21
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const KnowMore = () => {
    return (
      <section className="about">
        <div className="container">
          <div className="about-wrap">
            <div className="about-box">
              <h3>About 3Dicons</h3>
              <p>The project started as I was learning to use blender. Some of these icons are created just as a way to learn how to model those tiny things. Eventually, I realized I must make this available to the community. In conclusion, I decided to create a large collection of the most widely used 3D icons, and it has taken me months to put it all together. It is opensource and free for both personal and commercial use under CC0. You'll enjoy it.  You can reach me at twitter.com/realvjy</p>
              <p><a href="#">Read more about the project »</a></p>
            </div>
            <div className="stats">
              <div className="soon-log">
                <h4>ROADMAP</h4>
                <ul>
                  <li>1. Plugins for Figma, Sketch and XD</li>
                  <li>2. Package for Developers</li>
                  <li>3. Explorer and Single Download</li>
                  <li>4. Adding new icon sets regulary and more</li>
                </ul>
              </div>
              <div className="all-icons">
                <div className="num-stat">
                  <h3>121</h3>
                  <span>Icons</span>
                </div>
                <div className="num-stat">
                  <h3>1440</h3>
                  <span>Renders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default KnowMore
