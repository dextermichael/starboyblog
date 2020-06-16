import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { rhythm } from "../utils/typography"

const Layout = ({ props }) => {
  console.log(props)
  return (
    <>
      <Header siteTitle="Starboy" />
      <Wrapper>
        <main>{props.children}</main>
        <Footer />
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
