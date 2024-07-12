
// footer
// 24 Aug, 21
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-wrap">
          <div className="overlayz">Need design? <a href="https://overlayz.studio" className="link" target="_blank"><img src="/overlayz-o.png" /> overlayz studio <img src="/angle-arrow.svg" className="arrow" /></a></div>
          <h1>Beautifully crafted open source 3D icons</h1>
          <h3>100% FREE FOR Commercial and Personal Use UNDER <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0</a></h3>
          <div className="assets">
            <h5>Use with any design tool</h5>

            <div className="p-logo"><img src="/blender.png" /><img src="/figma.png" /> <img src="/sketch.png" /> <img src="/xd.png" /> <img src="/photoshop.png" /><img src="/spline.png" /><img src="/c4d.png" /><img src="/studio.png" /></div>
          </div>
          <div className="btn-lnks">
            <div className="dwn-links">
              <button className="btn btn-download">
                <h4>Download all</h4>
              </button>
              <ul className="dwn-list">
                <li><a href="https://bit.ly/3dicons-v1"> <img src="/figma-file.png" />Figma File<span> (compressed)</span></a></li>
                <li><a href="https://bit.ly/3dicons-dynamic-png-v1"> <img src="/png-file.png" />PNG Dynamic <span> (2400px, 1.3gb)</span></a></li>
                <li><a href="https://bit.ly/3dicons-iso-png-v1"> <img src="/png-file.png" />PNG ISO<span> (2400px, 1.2gb)</span></a></li>
                <li><a href="https://bit.ly/3dicons-front-png-v1"> <img src="/png-file.png" />PNG Front <span> (2400px, 1.2gb)</span></a></li>
                <li><a href="https://bit.ly/3dicons-blender-v1"> <img src="/blender-file.png" />Blender File <span> (205mb)</span></a></li>
                <li><a href="https://bit.ly/3dicons-fbx-v1"> <img src="/fbx-file.png" />Fbx File <span> (240mb)</span></a></li>
              </ul>
            </div>
            <a href="https://www.buymeacoffee.com/realvjy" className="btn btn-mesh" target="_blank">
              <h4>Donate & Support</h4>
            </a>

            <a href="https://bit.ly/edit-3dicons-mesh" className="btn btn-mesh" target="_blank">
              <h4>Edit with Mesh</h4>
            </a>

          </div>


          <div className="v2">
            <div className="ia-wrap">
              <div className="action-box">
                <div className="v2 a-img-box _2c">
                  <a href="/v2">
                    <img src="/v2.png" />
                  </a>
                </div>
                <div className="fig a-img-box _2c">
                  <a href="https://bit.ly/3dicons-figma">
                    <img src="figma-plugin.png" />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="handsss">
            <div className="container">
              <a href="https://realvjy.lemonsqueezy.com/checkout/buy/a11f5cef-a474-49f2-a452-0a7b6d03e342?discount=0">
                <img src="/handkit.png" />
              </a>
            </div>

          </div>
          <div className="sp-float">

            <a href="https://s.vjy.me/vectopus-sponsor" target="_blank">
              <img src="vectopus-illustration.jpg" />

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
                    <img src="/clay.png" />
                    <h4>Clay</h4>
                  </div>
                </div>
                <div className="img-style">
                  <div className="style-wrap">
                    <img src="/gradient.png" />
                    <h4>Gradient</h4>
                  </div>
                </div>
                <div className="img-style">
                  <div className="style-wrap">
                    <img src="/colored.png" />
                    <h4>Color</h4>
                  </div>
                </div>
                <div className="img-style">
                  <div className="style-wrap">
                    <img src="/premium.png" />
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
