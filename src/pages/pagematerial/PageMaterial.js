import React from "react";
import "./Material.css";
import { useEffect, useState } from "react";
import CardMaterial from "../../components/cardmaterial/CardMaterial";
import { materialServices } from "../../services/materialServices";

const PageMaterial = () => {
  const [material, setMaterial] = useState([]);

  const getDataMaterial = () => {
    const data = materialServices.getMaterials();
    data.then((value) => setMaterial(value));
  };
  useEffect(() => {
    getDataMaterial();
  }, []);

  return (
    <>
      <section id="banner-material">
        <div className="container-fluid">
          <div className="container text-light text-center fw-bold">
            <h4 className="display-1 fw-bold">Material</h4>
            <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />
            <h3 className="display-6">Cari Materi yang ingin kamu pelajari</h3>
          </div>
        </div>
      </section>
      <section className="main pb-5">
        <div className="container">
          <div id="materials">
            {material.map((item) => (
              // console.log(item.id)
              <CardMaterial id={item._id} image={item.pic} title={item.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageMaterial;
