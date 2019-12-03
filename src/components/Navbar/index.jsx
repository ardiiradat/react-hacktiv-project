import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="header" id="home">
          <div class="container main-menu">
            <div class="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="" title="" />
                </a>
              </div>
              <nav id="nav-menu-container">
                <ul class="nav-menu">
                  <li class="menu-active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
