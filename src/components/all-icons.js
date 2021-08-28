
// All Icons
// 24 Aug, 21
import React from "react"
import { useState, useEffect, useRef, useReducer } from "react";
import ReactDOM from "react-dom";


import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"



const AllIcons = () => {
      const data = useStaticQuery(graphql`
        query iconQuery{
          site {
            siteMetadata {
              social {
                twitter
              }
              author {
                name
              }
              siteUrl
            }
          }
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  id
                  title
                  date(formatString: "YYYY MM, DD")
                  category
                  premium
                  gradient
                  color
                  clay
                }
                fields {
                  slug
                }
              }
            }
          }
        }
    `)

    const initalState = 0;
    const [count, setCount] = useState(initalState);
    const counterRef = useRef(initalState);



    const siteTitle = data.site.siteMetadata.title
    const icons = data.allMarkdownRemark.edges

    return (

      <section className="all-icons">
        <div className="container">
          <div className="icons-wrap">
            <h2 className="gradient blue">100+ icons Preview</h2>
              <div className="icons-grid">
              {icons.map(({ node }) => {
                const title = node.frontmatter.title
                return (
                  <>
                  <div className="icons-box">
                    <div className="i-wrap">
                      <div className="img-ani">
                        <div className="img-list">
                          <img src={node.frontmatter.clay} key="1" className="clay"/>
                          <img src={node.frontmatter.gradient} key="1" className="gradient"/>
                          <img src={node.frontmatter.color} key="1" className="color"/>
                          <img src={node.frontmatter.premium} key="1" className="premium"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </>
                )
              })}
              </div>
          </div>
        </div>
      </section>
    )
}

export default AllIcons
