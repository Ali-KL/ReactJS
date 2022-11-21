import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        style={{ background: "radial-gradient(circle, rgba(183, 218, 160, 1) 3%, rgba(44, 167, 99, 1) 94%)" }}
        id="navBar"
        className="navbar navbar-expand-sm navbar-dark fixed-top"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Ali Kholani
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/works">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
