import React from "react";
import "./Artikel.css";
import CardArtikel from "../../components/cardartikel/CardArtikel";
import { useEffect, useState } from "react";

const PageArtikel = () => {
  const url = "https://635538c3483f5d2df3afaee4.mockapi.io/articles";
  const [artikel, setArtikel] = useState([]);

  const getDataArtikel = async () => {
    const response = await fetch(url);
    const dataArtikel = await response.json();
    // console.log(dataArtikel);

    setArtikel(dataArtikel);
    // console.log(artikel);
  };
  useEffect(() => {
    getDataArtikel();
  });

  return (
    <>
      <section className="main pb-5">
        <div className="container">
          <h1 className="p-4 text-center">Artikel</h1>
          <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />
          <div id="artikels">
            {artikel.map((item) => (
              // console.log(item.id)
              <CardArtikel id={item.id} image={item.img} title={item.title} deskripsi={item.deskripsi} paragraph={item.paragraph} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageArtikel;
