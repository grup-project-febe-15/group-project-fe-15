import React from "react";
import "./Home.css";
import { FaBook, FaCode } from "react-icons/fa";
import Join from "../../assets/Join.png";

const PageHome = () => {
  return (
    <>
      <section id="banner">
        <div className="container-fluid">
          <div className="container text-center">
            <h4 className="display-1">Temukan Minat dan Bakatmu!</h4>
            <h3 className="display-6">Pelajari lebih lanjut mengenai Seni Rupa!</h3>
          </div>
        </div>
      </section>
      <section id="layanan">
        <div className="container-fluid pt-5 pb-5">
          <div className="container text-center">
            <h2 className="display-3" id="layanan">
              Experience
            </h2>
            <p>Kami membantu anda untuk memperluas wawasan seputar seni rupa.</p>
            <div className="row pt-4">
              <div className="col-md-6">
                <span className="lingkaran">
                  <FaCode size={40} />
                </span>
                <h3 className="mt-3">Course</h3>
                <p>Menyediakan video pembelajaran dan tutorial seni rupa</p>
              </div>

              <div className="col-md-6">
                <span className="lingkaran">
                  <FaBook size={40} />
                </span>
                <h3 className="mt-3">Blog</h3>
                <p>Menyediakan informasi seputar seni (Events, Artikel, serta kompetisi)</p>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#e2edff" fillOpacity="1" d="M0,192L480,64L960,128L1440,32L1440,320L960,320L480,320L0,320Z"></path>
        </svg>
      </section>
      <section id="ajakan">
        <div className="container-fluid ms-auto pt-5 pb-5">
          <div className="card mx-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={Join} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body-ajakan mx-auto text-center pt-5">
                  <h2>TUNGGU APA LAGI AYO GABUNG SEKARANG</h2>
                  <a href="/assets/signup.html">
                    <button type="button" className="btn btn-primary btn-lg mt-5">
                      LET'S JOIN US
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHome;
