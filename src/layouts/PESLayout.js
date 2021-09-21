import React from "react"
import { Link } from "gatsby"
import { Seo } from "../components/Seo"
import { Navbar } from "../components/Navbar"

function Layout({ children }) {
  return (
    <>
      <Seo />
      {/* Navbar */}
      <Navbar page="pes"/>

      <main className="bg-light" style={{ marginTop: "5rem" }}>{children}</main>
      <footer className="bg-primary text-white mt-5 footer py-4">
        <div className="d-flex flex-column flex-md-row container justify-content-around" style={{ overflow: "hidden" }}>
          <div className="d-flex flex-column p-2">
            <div className="fw-bold">Menu</div>
            <div className="d-flex flex-column">
              <Link className="text-white" to="/">Home</Link>
              <Link className="text-white" to="/about-us">About Us</Link>
              <Link className="text-white" to="/activities">Activities</Link>
            </div>
          </div>
          <div className="d-flex flex-column p-2">
            <div className="fw-bold">Useful Links</div>
          </div>
          <div className="d-flex flex-column align-items-center p-2">
            <div className="fw-bold">Follow Us</div>
          </div>
          <div className="d-flex flex-column align-items-center p-2">
            Address
          </div>
        </div>
      </footer>
      <div className="text-center bg-dark text-white p-2">
        Developed by IEEE SB CEV Webteam
      </div>
    </>
  )
}

export default Layout
