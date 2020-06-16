import React from "react"
import Link from "gatsby-link"
import "./Header.css"
import logo from "../images/starboy.png"

class Header extends React.Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageXOffset
    console.log(scrollTop)

    if (scrollTop > 10) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

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
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    )
  }
}

export default Header
