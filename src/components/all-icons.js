
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
    useEffect(() => {
      counterRef.current = count;
    })

    useEffect(() => {
      setInterval(() => {
        setCount(counterRef.current + 1);
      },700);
    }, []);

    function sayHello(event) {
      counterRef.current = 0;
      console.log(event.target.dataset.clay);
    }


    const siteTitle = data.site.siteMetadata.title
    const icons = data.allMarkdownRemark.edges

    return (

      <section className="all-icons">
        <div className="container">
          <div className="icons-wrap">
            <h2 className="gradient blue">100+ icons Preview</h2>
              <div className="icons-grid">
              <>
                {count}
              </>
              {icons.map(({ node }) => {
                const title = node.frontmatter.title
                return (
                  <div className="icons-box">
                    <div className="i-wrap">
                      <a href="#" onMouseEnter={sayHello.bind(this)}>
                        <div classeName="imgs">
                          <img src={node.frontmatter.clay} key="1" data-clay={node.frontmatter.clay} data-gradient={node.frontmatter.gradinet} data-premium={node.frontmatter.premium}/>

                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
              </div>
          </div>
        </div>
      </section>
    )
}

export default AllIcons
