
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
          allMarkdownRemark(sort: {fields: frontmatter___category}){
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
            <h2 className="gradient blue">120+ icons Preview</h2>
            <p>1440+ Rendered Images</p>
              <div className="icons-grid">
              {icons.map(({ node }) => {
                const title = node.frontmatter.title
                return (
                  <>
                  <div className="icons-box">
                    <div className="i-wrap">
                      <div className="img-ani">
                        <div className="img-list" key={node.frontmatter.id}>
                          <img src={node.frontmatter.gradient} className="gradient"/>
                          <img src={node.frontmatter.clay} className="clay"/>
                          <img src={node.frontmatter.color} className="color"/>
                          <img src={node.frontmatter.premium} className="premium"/>
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
