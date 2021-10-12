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
              <p>When I began learning blender, I came up with the idea for this project. Some of these icons were created just so I could learn how to model those tiny things. After creating those, it occurred to me that I should make them available to the community. The result is a collection of the most widely used 3D icons, which has taken me months to craft in blender. It is opensource and free for both personal and commercial use under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0</a>. So, download and start creating some cool designs. Feel free to tweet me <a href="https://twitter.com/realvjy">@realvjy</a>, for any feedback</p>
              <p><a href="/about" className="llnk">Read more about the project »</a></p>
            </div>

            <div className="stats">
              <div className="soon-log">
                <h4>ROADMAP</h4>
                <ul>
                  <li>1. Plugins for Figma, Sketch and XD</li>
                  <li>2. Package for Developers</li>
                  <li>3. Explorer and Single Download</li>
                  <li>4. Adding new icon sets regulary and more</li>
                  <li>5. Online editor and scene builder</li>
                </ul>
              </div>
              <div className="all-icons">
                <div className="num-stat">
                  <h3>120</h3>
                  <span>Unique Icons</span>
                </div>
                <div className="num-stat">
                  <h3>1440</h3>
                  <span>Rendered Images</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default KnowMore
