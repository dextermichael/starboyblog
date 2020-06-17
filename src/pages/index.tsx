import React from "react"
import Wave from "../components/Wave"
import "../layouts/index.css"
import Header from "../components/Header.js"

const IndexPage = () => (
  <>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>STAR BOY</h1>
        {/* <p>Follow our journey</p>
        <p>As we build something great!</p> */}

        <Wave />
      </div>
    </div>
  </>
)

export default IndexPage
