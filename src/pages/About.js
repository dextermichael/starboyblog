import React from "react"
import "../layouts/index.css"
import styled from "styled-components"
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
          <h1>They call me Dex! </h1>
          <h2>Life Learner</h2>
          <p>
            Ive been breaking things since I was kid. But i always loved buting
            them back together! Started teaching myself the piano when i was 6
            years old. That taught me the frustration and reward of sticking
            with something and watching it blossom into something great. Always
            ready for a new adventure!
          </p>{" "}
        </SinGroup>
      </Sin>
    </Layout>
  </div>
)

export default About
