import React from "react"

import Header from "../components/Header.js"

const Layout = props => {
  console.log(props)
  return (
    <>
      <Header />

      <main>{props.children}</main>
    </>
  )
}

export default Layout
