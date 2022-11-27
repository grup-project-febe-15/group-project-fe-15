import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CardDetail from "../detail/carddetail/CardDetail";

const DetailArtikel = () => {
  const { id } = useParams();
  const url = `https://635538c3483f5d2df3afaee4.mockapi.io/articles/${id}`;
  const [detailartikel, setArtikel] = useState([]);

  const getDataArtikel = async () => {
    const response = await fetch(url);
    const dataArtikel = await response.json();
    setArtikel(dataArtikel);
    // console.log(artikel);
  };
  console.log(detailartikel);
  useEffect(() => {
    getDataArtikel();
  });
  return (
    <>
      <section className="Detail Artikel">
        <div className="container">
          {detailartikel?.map((item) => (
            <CardDetail id={item.id} image={item.img} title={item.title} deskripsi={item.deskripsi} paragraph={item.paragraph} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DetailArtikel;
