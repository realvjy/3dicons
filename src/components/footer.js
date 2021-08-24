
// footer
// 24 Aug, 21
import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Footer = () => {
    return (
      <section className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="credit-box">
              <div className="name">
                <p>made with love and coffee by<a href="https://twitter.com/realvjy"> @realvjy</a></p>
              </div>
              <div className="name">
                <p>Free for commercial and personal use under<a href="#"> CC0 License</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer
