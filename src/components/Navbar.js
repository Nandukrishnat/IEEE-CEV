import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export const Navbar = ({ page }) => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow">
        <div className="container-lg">
          <div className="h3 fw-bold" href="#">
            <Link to="/"><StaticImage src="../images/IEEE_logo.webp" className="logo mx-4" alt="IEEE Logo" /></Link>
            {
              page.toLowerCase() === 'wie' ? <StaticImage src="../images/WIE_logo.webp" className="logo" /> :
                page.toLowerCase() === 'pes' ? <StaticImage src="../images/PES_logo.webp" className="logo" /> :
                  page.toLowerCase() === 'cs' ? <StaticImage src="../images/CS_logo.webp" style={{maxWidth:"8rem",maxHeight:"3.5rem",objectFit:"cover"}} /> : ''
            }
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
            <div className="navbar-nav align-items-lg-center fw-bold">
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
                  id="Communities"
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
                  id="Execom"
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
                    <Link className="dropdown-item" to="/execom/execom2020">
                      Execom 2020-21
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/execom/execom2019">
                      Execom 2019-20
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/execom/execom2018">
                      Execom 2018-19
                    </Link>
                  </li>
                </ul>
              </div>
              <Link className="nav-link" to="/activities">
                Activities
              </Link>
              <Link className="btn btn-primary fw-bold m-2" to="https://www.ieee.org/membership-application/join.html">Join IEEE</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
