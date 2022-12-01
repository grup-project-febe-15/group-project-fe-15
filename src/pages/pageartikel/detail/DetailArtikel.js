import React, { useEffect, useState } from "react";
import CardDetail from "../detail/carddetail/CardDetail";
import { useParams } from "react-router-dom";
import { artikelServices } from "../../../services/artikelServices";

const DetailArtikel = () => {
  const [detailartikel, setDetail] = useState();
  const params = useParams();
  const getDetailArtikels = () => {
    artikelServices.getDetailArtikels(params._id).then((response) => {
      setDetail(response);
      console.log(response);
    });
  };

  useEffect(() => {
    getDetailArtikels();
  });
  console.log(detailartikel);

  return (
    <>
      <section className="Detail Artikel">
        <div className="container">
          <CardDetail id={detailartikel?._id} image={detailartikel?.pic} title={detailartikel?.title} paragraph={detailartikel?.description} />
        </div>
      </section>
    </>
  );
};

export default DetailArtikel;
