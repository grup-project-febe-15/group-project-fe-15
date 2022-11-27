import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav sticky="top" className="navbar navbar-expand-lg navbar-dark shadow ">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={icon} width="65" height="35" className="d-inline-block align-top" alt="Icon Art" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="a-nav nav-link p-3">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/artikel" className="a-nav nav-link p-3">
                    Article
                  </Link>
                </li>
                <li className="nav-item">
                  <NavDropdown title="Course" className="nav-dropdown a-nav nav-link">
                    <NavDropdown.Item href="/video">Video</NavDropdown.Item>
                    <NavDropdown.Item href="/material">Material</NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="a-nav nav-link p-3">
                    About Us
                  </Link>
                </li>
              </ul>
              <Link to="/masuk" className="a-nav nav-link p-3">
                Masuk
              </Link>
              <Link to="/daftar" type="button" className="btn btn-primary">
                Daftar
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
