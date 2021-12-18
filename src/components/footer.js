
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
                <p>Made with love and coffee by<a href="https://vijayverma.co/?ref=3dicons"> vijay verma</a> [<a href="https://twitter.com/realvjy">@realvjy</a>]</p>
              </div>
              <div className="name">
                <p>Free for commercial and personal use under<a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank"> CC0 License</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer
