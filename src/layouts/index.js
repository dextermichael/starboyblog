import React from "react"
import Header from "../components/Header"
import "./index.css"
import { rhythm } from "../utils/typography"

const Layout = props => {
  console.log(props)
  return (
    <>
      <Header siteTitle="Starboy" />
      <div style={{ height: 100 }}></div>
      <Wrapper>
        <main>{props.children}</main>
      </Wrapper>
    </>
  )
}

function Wrapper(props) {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {" "}
      {props.children}
    </div>
  )
}

export default Layout
