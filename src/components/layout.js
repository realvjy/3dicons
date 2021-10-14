import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect, useRef, useReducer } from "react";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let header = (
      <>
      <div className="announce-wrapper producthunt">
      </div>
      </>
    )

    return (
        <div className="3dicons_main">
          <header>{header}</header>
          <main>{children}</main>
          <div className="ph-float">
            <a href="https://www.producthunt.com/posts/3dicons?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-3dicons" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=315795&theme=dark" alt="3dicons - Open source 3D icon library with over 1440+ icons | Product Hunt"/></a>
          </div>
        </div>
    )
}

export default Layout
