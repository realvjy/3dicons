
// footer
// 24 Aug, 21
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Header = () => {
    return (
      <section className="header">
        <div className="container">
          <div className="header-wrap">
            <h1>Beautifully crafted open source 3D icons</h1>
            <h3>100% FREE FOR Commercial and Personal Use UNDER <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0</a></h3>
            <div className="assets">
                <div className="p-logo"><img src="/figma.png"/> <img src="/sketch.png"/> <img src="/xd.png"/> <img src="/blender.png"/><img src="/obj.png"/></div>
            </div>
            <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <h4>Download All</h4>
                  </button>
                  <ul className="dwn-list">
                    <li><a href="https://bit.ly/contra-wireframe-kit-figma"><img src="/figma.png"/> Figma</a></li>
                    <li><a href="http://bit.ly/contra-wireframe-kit-sketchapp"><img src="/sketch.png"/> Sketch</a></li>
                    <li><a href="https://bit.ly/contra-wireframe-kit-xd"><img src="xd.png"/> Adobe XD</a></li>
                    <li><a href="https://bit.ly/contra-wireframe-kit-xd"><img src="blender.png"/> Blender & .OBJ</a></li>
                    <li><a href="https://bit.ly/contra-wireframe-kit-studio"><img src="/png.png"/> .PNG</a></li>
                  </ul>
                </div>
                <a href="https://www.buymeacoffee.com/realvjy" className="btn btn-coffee">
                  <h4>Donate & Support</h4>
                </a>
            </div>
            <div className="styles-angle">
              <div className="s-a-wrap">
                <div className="header-text">
                  <h2 className="gradient blue">4 predefined color style</h2>
                  <p>+ you can adjust color</p>
                </div>
                <div className="img-box styles">
                  <div className="img-style">
                    <div className="style-wrap">
                      <img src="/clay.png"/>
                      <h4>Clay</h4>
                    </div>
                  </div>
                  <div className="img-style">
                    <div className="style-wrap">
                      <img src="/gradient.png"/>
                      <h4>Gradient</h4>
                    </div>
                  </div>
                  <div className="img-style">
                    <div className="style-wrap">
                      <img src="/colored.png"/>
                      <h4>Color</h4>
                    </div>
                  </div>
                  <div className="img-style">
                    <div className="style-wrap">
                      <img src="/premium.png"/>
                      <h4>Premium</h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="styles-angle">
              <div className="s-a-wrap">
                <div className="header-text">
                  <h2 className="gradient blue">4 predefined color style</h2>
                  <p>+ you can adjust color</p>
                </div>
                <div className="img-box angle">
                  <img src="/angle-detail.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header
