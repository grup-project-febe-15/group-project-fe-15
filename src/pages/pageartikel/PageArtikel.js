import React from "react";
import "./Artikel.css";
import CardArtikel from "../../components/cardartikel/CardArtikel";
import { artikelServices } from "../../services/artikelServices";
import { useEffect, useState } from "react";

const PageArtikel = () => {
  const [artikel, setArtikel] = useState([]);

  const getDataArtikel = () => {
    const data = artikelServices.getArtikels();
    data.then((value) => setArtikel(value));
  };
  useEffect(() => {
    getDataArtikel();
  }, []);

  return (
    <>
      <section id="banner-artikel">
        <div className="container-fluid">
          <div className="container text-light text-center fw-bold">
            <h4 className="display-1 fw-bold">Artikel</h4>
            <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />
            <h3 className="display-6">Cari artikel yang ingin kamu baca</h3>
          </div>
        </div>
      </section>
      <section className="main pb-5">
        <div className="container">
          <div id="artikels">
            {artikel.map((item) => (
              <CardArtikel id={item._id} image={item.pic} title={item.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageArtikel;
