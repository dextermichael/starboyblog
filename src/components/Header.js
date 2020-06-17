import React from "react"
import Link from "gatsby-link"
import "../components/Header.css"
import logo from "../images/starboy.svg"

class Header extends React.Component {
  // state = {
  //   hasScrolled: false,
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }

  // handleScroll = event => {
  //   const scrollTop = window.pageXOffset
  //   console.log(scrollTop)

  //   if (scrollTop > 10) {
  //     this.setState({ hasScrolled: true })
  //   } else {
  //     this.setState({ hasScrolled: false })
  //   }
  // }

  render() {
    return (
      <div className="Header">
        <div className="HeaderGroup">
          <Link to="/">
            <img src={logo} width="25" />
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
