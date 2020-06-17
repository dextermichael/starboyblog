import React from "react"

import Header from "../components/Header.js"
import "./index.css"

const Layout = props => {
  console.log(props)
  return (
    <>
      <Header siteTitle="Starboy" />
      <Wrapper>
        <main>{props.children}</main>
      </Wrapper>
    </>
  )
}

function Wrapper(props) {
  return <div>{props.children}</div>
}

export default Layout
