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
              <div className="r-text">
                <h2 className="gradient blue">Get custom 3D icons</h2>
                <p>You can get custom icon pack of 20 just $25. It may be possible those icons will add here and free for you 😍. </p>
                <a href="#" className="btn btn-coffee">Request Icon</a>
              </div>
              <div className="r-img">
                <img src="/clay.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default InAction
