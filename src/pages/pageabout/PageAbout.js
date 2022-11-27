import React from "react";
import "./About.css";
import Feature from "../../assets/features.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const PageAbout = () => {
  return (
    <>
      <section id="aboutus">
        <div className="about p-5">
          <div className="container text-center p-3">
            <h1 className="p-3">
              <strong>About Us</strong>
            </h1>
            <h3 className="mb-5">
              Icon Art merupakan sebuah platform website untuk memfasilitasi anak <br />
              muda khususnya siswa SMA yang ingin mempelajari lebih lanjut <br />
              mengenai Seni, khususnya dalam seni rupa.
            </h3>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e2edff"
            fillOpacity="1"
            d="M0,96L0,64L240,64L240,160L480,160L480,224L720,224L720,32L960,32L960,192L1200,192L1200,256L1440,256L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="features">
        <div className="countainer text-center p-3">
          <h1>
            <strong>OUR FEATURES</strong>
          </h1>
          <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />

          <div className="py-4 pt-5">
            <div className="row text-center">
              <div className="col-lg-4">
                <img className="img-fluid" src={Feature} alt="thumbnail-1.jpeg" />
              </div>
              <div className="col-lg-8">
                <div className="title py-2">
                  <h2>Materi Pembelajaran Menarik</h2>
                </div>
                <div className="paragraph">
                  <h4>IconArt menyediakan materi - materi pembelajaran yang lengkap tentang seni rupa. Di mana materi yang diberikan ini bisa berguna untuk mengasah kemampuan pembelajaran tentang seni rupa.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5584ac"
            fillOpacity="1"
            d="M0,0L0,64L240,64L240,32L480,32L480,160L720,160L720,192L960,192L960,288L1200,288L1200,320L1440,320L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="author">
        <div className="container text-center ms-auto pt-5 pb-5 text-white">
          <h1>
            <strong> OUR TEAM </strong>
          </h1>
          <hr className="border border-2 border-light mx-auto w-50 bg-light" />
          <div className="row pt-4 gx-4 gy-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center text-black">
                  <h3 className="mb-2 username">Aqilla Noor Lazuardi</h3>
                  <h4>Front-end</h4>
                  <h6>Semarang, Jawa Tengah</h6>
                  <div className="mb-4 py-2">
                    <a href="https://github.com/aqillanl">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaGithub size={20} />
                      </button>
                    </a>
                    <a href="https://www.linkedin.com/in/aqilla-lazuardi-024a16252/">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaLinkedin />
                      </button>
                    </a>
                    <a href="https://www.instagram.com/aqillanl/">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaInstagram />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center text-black">
                  <h3 className="mb-2 username">Huriyah Afiyah</h3>
                  <h4>Front-end</h4>
                  <h6>Surabaya, Jawa Timur</h6>
                  <div className="mb-4 py-2">
                    <a href="https://www.instagram.com">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaGithub size={20} />
                      </button>
                    </a>
                    <a href="https://www.instagram.com">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaLinkedin />
                      </button>
                    </a>
                    <a href="https://www.instagram.com">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaInstagram />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center text-black">
                  <h3 className="mb-2 username">Muklah Isa Dewa</h3>
                  <h4>Front-end</h4>
                  <h6>Malang, Jawa Timur</h6>
                  <div className="mb-4 py-2">
                    <a href="https://github.com/muklas-id">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaGithub size={20} />
                      </button>
                    </a>
                    <a href="https://www.linkedin.com/in/muklas-isa-dewa-637672234/">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaLinkedin />
                      </button>
                    </a>
                    <a href="https://www.instagram.com/muklas.id_/">
                      <button type="button" className="btn btn-outline-primary btn-floating">
                        <FaInstagram />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageAbout;
