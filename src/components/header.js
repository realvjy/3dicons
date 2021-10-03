
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
                <h5>Use with any design tool</h5>

                <div className="p-logo"><img src="/figma.png"/> <img src="/sketch.png"/> <img src="/xd.png"/> <img src="/blender.png"/><img src="/obj.png"/></div>
            </div>
            <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <h4>Coming Soon</h4>
                  </button>
                  <ul className="dwn-list">
                    <li><a href="https://bit.ly/3dicons-early-access"> Early Access</a></li>
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
                  <h2 className="gradient blue">3 Camera angle & HQ render</h2>
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
