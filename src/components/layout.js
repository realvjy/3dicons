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
        <div>
          <main>{children}</main>
        </div>
    )
}

export default Layout
