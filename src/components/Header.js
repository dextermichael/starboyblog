import React from "react"
import Link from "gatsby-link"
import "./Header.css"
import logo from "../images/"

class Header extends React.Component {
  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={logo} width="30" />
          </Link>
          <Link to="/About">About</Link>
          <Link to="/blog">Covers</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    )
  }
}

export default Header
