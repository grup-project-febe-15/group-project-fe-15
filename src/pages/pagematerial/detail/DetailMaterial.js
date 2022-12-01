import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CardDetail from "./carddetail/CardDetail";
import { materialServices } from "../../../services/materialServices";

const DetailArtikel = () => {
  const [detailmaterial, setDetail] = useState();
  const params = useParams();
  const getDetailMaterials = () => {
    materialServices.getDetailMaterials(params._id).then((response) => {
      setDetail(response);
      console.log(response);
    });
  };

  useEffect(() => {
    getDetailMaterials();
  });
  console.log(detailmaterial);

  return (
    <>
      <section className="Detail Material">
        <div className="container">
          <CardDetail id={detailmaterial?._id} image={detailmaterial?.pic} title={detailmaterial?.title} paragraph={detailmaterial?.description} />
        </div>
      </section>
    </>
  );
};

export default DetailArtikel;
