import React from "react"
import Wave from "../components/Wave"
import "../layouts/index.css"
import Header from "../components/Header.js"

import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Layout from "../layouts"

const Sin = styled.div`
  text-align: center;
  justifycontent: center;
`
const SinGroup = styled.div``

const About = () => (
  <div>
    <Layout>
      <div style={{ height: 100 }}></div>
      <Sin>
        <SinGroup>
          <h2>Call me dex! </h2>
          <h1>sample</h1>
          <p>Im from nyc</p>{" "}
        </SinGroup>
      </Sin>
    </Layout>
  </div>
)

export default About
