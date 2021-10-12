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
            
          </div>
        </div>
    )
}

export default Layout
