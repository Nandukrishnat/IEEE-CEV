import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Layout({ children }) {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow">
          <div className="container-lg">
            <div className="h3 fw-bold" href="#">
              <StaticImage src="../images/IEEE_logo.png" className="logo" alt="IEEE Logo"/>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
                <div className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Communities
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/chapter/computer-society"
                      >
                        Computer Society
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/chapter/pes-society">
                        Power and Energy Society
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/chapter/wie-society">
                        Women in Engineering
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Execom
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/">
                        Execom 2021
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Execom 2020
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Execom 2019
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link className="nav-link" to="/activities">
                  Activities
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main style={{marginTop:"5rem"}}>{children}</main>
      <footer className="bg-primary text-white">
        <div className="d-flex flex-column flex-md-row container justify-content-around" style={{ overflow: "hidden" }}>
          <div className="d-flex flex-column align-items-center">
            <div className="">Quick Links</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="">Follow Us</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            Address
          </div>
        </div>
        <div className="text-center bg-dark text-white p-2">
          Developed by IEEE SB CEV Webteam
        </div>
      </footer>
    </>
  )
}

export default Layout
