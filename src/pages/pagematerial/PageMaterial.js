import React from "react";
import "./Material.css";
import { useEffect, useState } from "react";
import CardMaterial from "../../components/cardmaterial/CardMaterial";

const PageMaterial = () => {
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
          <h1 className="p-4 text-center">Material</h1>
          <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />
          <div id="artikels">
            {artikel.map((item) => (
              // console.log(item.id)
              <CardMaterial id={item.id} image={item.img} title={item.title} deskripsi={item.deskripsi} paragraph={item.paragraph} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageMaterial;
