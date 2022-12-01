import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";

const myFooterStyle = {
  textDecoration: "none",
};

const Footer = () => {
  return (
    <>
      <>
        <section id="footer">
          <footer className="text-center">
            <section className="pt-2">
              <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-4 col-xl-6 mx-auto mb-4">
                    {/* Content */}
                    <Link className="navbar-brand" to="/">
                      <img src={icon} alt="" height="50" />
                    </Link>
                    <p>Icon Art merupakan sebuah platform website untuk memfasilitasi anak muda khususnya siswa SMA yang ingin mempelajari lebih lanjut mengenai Seni, khususnya dalam seni rupa.</p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
                    <p>
                      <Link to="/" className="text-reset" style={myFooterStyle}>
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link to="/artikel" className="text-reset" style={myFooterStyle}>
                        Artikel
                      </Link>
                    </p>
                    <p>
                      <Link to="/video" className="text-reset" style={myFooterStyle}>
                        Video
                      </Link>
                    </p>
                    <p>
                      <Link to="/material" className="text-reset" style={myFooterStyle}>
                        Material
                      </Link>
                    </p>
                    <p>
                      <Link to="/about" className="text-reset" style={myFooterStyle}>
                        About Us
                      </Link>
                    </p>
                  </div>
                  {/* Grid column */}

                  {/* Grid column */}
                  <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">HUBUNGI KAMI</h6>
                    <p>
                      <i className="fas fa-phone"></i>+62 821-3456-7891
                    </p>
                    <p>
                      <i className="fas fa-envelope"></i>iconart@gmail.com
                    </p>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
              </div>
            </section>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mx-5">
              {/* Left */}
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* Left */}

              {/* Right */}
              <div>
                <a href="https://www.facebook.com" className="me-4 text-reset">
                  <FaFacebook style={{ fontSize: "2rem" }} />
                </a>
                <a href="https://www.Twitter.com" className="me-4 text-reset">
                  <FaTwitter style={{ fontSize: "2rem" }} />
                </a>
                <a href="https://www.instagram.com" className="me-4 text-reset">
                  <FaInstagram style={{ fontSize: "2rem" }} />
                </a>
              </div>
              {/* Right */}
            </section>
            {/* Section: Social media */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4">© 2022 Copyright: ICONART.</div>
            {/* <!-- Copyright --> */}
          </footer>
        </section>
      </>
    </>
  );
};

export default Footer;
