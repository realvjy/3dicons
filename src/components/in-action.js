// in-action
// 25 Aug, 21
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const InAction = () => {
  return (
    <section className="inaction">
      <div className="container">
        <div className="ia-wrap">
          <div className="request-box">
            <div className="r-box-wrapper">
              <div className="r-text">
                <div className="r-t-wrap">
                  <h2 className="gradient blue">Get custom 3D icons</h2>
                  <p>Min Icon Pack of 10 for $200. Commission me to draw 3D icon pack. For commercial use.</p>
                  <a href="https://forms.gle/ec5wGyt6HqqMcCBAA" className="btn btn-coffee request">Request Icon</a>
                </div>
              </div>
              <div className="r-img">
                <div className="r-im-wrap">
                  <img src="/3dicons.gif" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="gradient blue">3dicons in action</h2>
          <p>Crafted some examples - mockups, posts, and presentations that you can download for free <a href="https://bit.ly/3dicons-mockups">from Figma community.</a></p>
          <div className="action-box">
            <div className="a-img-box _4c">
              <div className="a-img-wrap">
                <img src="/screen-1.png" />
              </div>
            </div>
            <div className="a-img-box _4c">
              <div className="a-img-wrap">
                <img src="/screen-2.png" />
              </div>
            </div>
            <div className="a-img-box _4c">
              <div className="a-img-wrap">
                <img src="/screen-3.png" />
              </div>
            </div>
            <div className="a-img-box _4c">
              <div className="a-img-wrap">
                <img src="/screen-4.png" />
              </div>
            </div>
            <div className="a-img-box _3c">
              <div className="a-img-wrap">
                <img src="/insta-post-1.png" />
              </div>
            </div>
            <div className="a-img-box _3c">
              <div className="a-img-wrap">
                <img src="/insta-post-2.png" />
              </div>
            </div>
            <div className="a-img-box _3c">
              <div className="a-img-wrap">
                <img src="/insta-post-3.png" />
              </div>
            </div>

            <div className="a-img-box _1c">
              <div className="a-img-wrap">
                <img src="/web-1.png" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default InAction
