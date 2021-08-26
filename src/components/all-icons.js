
// All Icons
// 24 Aug, 21
import React from "react"
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
          markdownRemark {
            html
            frontmatter {
              title
              description
              date(formatString: "MMMM YY, DD")
            }
          }
        }
    `)

    return (
      <section className="all-icons">
        <div className="container">
          <div className="icons-wrap">
            <h2 className="gradient blue">100+ icons Preview</h2>
            <div className="icons-grid"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />

          </div>
        </div>
      </section>
    )
}

export default AllIcons
